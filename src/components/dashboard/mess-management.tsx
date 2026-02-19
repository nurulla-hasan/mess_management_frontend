import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MessManagement() {
  const managers = [
    {
      name: "Zakir Hossain",
      role: "Mess Manager",
      image: "https://github.com/shadcn.png",
      action: "call"
    },
    {
      name: "Rakib Ahmed",
      role: "Bazar Manager (Today)",
      image: "https://github.com/shadcn.png",
      action: "message"
    }
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Mess Management
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {managers.map((manager, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={manager.image} />
                <AvatarFallback>{manager.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{manager.name}</p>
                <p className="text-xs text-muted-foreground">{manager.role}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              {manager.action === "call" ? <Phone className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
