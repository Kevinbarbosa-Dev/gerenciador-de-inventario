import * as React from 'react'
import { Check, ChevronsUpDown, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function ComboBox({ label, placeholder, initialOptions, value, onChange, onAddOption }) {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState(initialOptions)
  const inputRef = React.useRef(null)

  const handleSelect = React.useCallback((currentValue) => {
    onChange(currentValue)
    setOpen(false)
  }, [onChange])

  const addNewOption = React.useCallback(() => {
    if (inputRef.current && inputRef.current.value && !options.includes(inputRef.current.value)) {
      const newOption = inputRef.current.value
      setOptions(prev => [...prev, newOption])
      onChange(newOption)
      onAddOption(newOption)
      setOpen(false)
    }
  }, [options, onChange, onAddOption])

  return (
    <div className="flex flex-col space-y-1.5">
      <label htmlFor={label} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between hover:bg-background"
          >
            {value || `Selecione ou adicione ${label.toLowerCase()}...`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={placeholder} ref={inputRef} />
            <CommandEmpty>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={addNewOption}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar "{inputRef.current?.value}"
              </Button>
            </CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}