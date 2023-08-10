import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertComponent() {
  return (
    <div className="max-w-2xl m-auto mt-8">
      <h1 className="text-center mb-8">Alert Normal & Danger</h1>
      <Alert>
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive" className="mt-8">
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
