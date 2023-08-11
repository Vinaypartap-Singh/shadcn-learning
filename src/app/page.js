import { ThemeToggle } from "@/components/userComp/ThemeSwitch";
import { Accordian } from "@/components/userComp/accoridan";
import { AlertComponent } from "@/components/userComp/alert";
import { AlertDialogComp } from "@/components/userComp/alert-dialog";
import { ContextMenuComp } from "@/components/userComp/context-menu";
import { DropdownMenuComp } from "@/components/userComp/dropdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <h1 className="text-center">Shadcn Ui Component Example</h1>
        <ThemeToggle />
        <Accordian />
        <AlertComponent />
        <AlertDialogComp />
        <ContextMenuComp />
        <DropdownMenuComp />
      </div>
    </main>
  );
}
