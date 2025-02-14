"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DraggableTileProps {
  id: string
  onRemove: () => void
}

export function DraggableTile({ id, onRemove }: DraggableTileProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Card ref={setNodeRef} style={style} className="relative">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{id.charAt(0).toUpperCase() + id.slice(1)}</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 cursor-grab" {...attributes} {...listeners}>
            <GripVertical className="h-4 w-4" />
            <span className="sr-only">Drag to reorder</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onRemove}>
            <X className="h-4 w-4" />
            <span className="sr-only">Remove tile</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] rounded-md border border-dashed" />
      </CardContent>
    </Card>
  )
}

