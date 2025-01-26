import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Anouncement_FirstSection from "./Anouncement_FirstSection"

export function Anouncement_DialogSection({ open, close }: { open: boolean, close: () => void }) {
  return (
    <Dialog defaultOpen={true} >
      <DialogContent className="h-[80vh] w-[80vw] max-sm:mt-6">
        <div className="flex items-center justify-center space-x-2 max-sm:space-x-1">
          <DialogClose asChild>
            <Button  className="flex items-center justify-center max-sm:p-4 bg-black text-white border-2 rounded-3xl hover:bg-white hover:text-black border-black" onClick={close}>
              Close
            </Button>
          </DialogClose>
        </div>
        <Anouncement_FirstSection />
      </DialogContent>
    </Dialog>
  )
}
