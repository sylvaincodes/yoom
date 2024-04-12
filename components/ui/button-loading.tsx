import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function ButtonLoading() {
  return (
    <Button disabled variant="default" className="w-full bg-gray-400 cursor-pointer">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Patientez
    </Button>
  )
}
