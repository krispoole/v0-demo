"use client"

import { useState } from "react"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from "@dnd-kit/sortable"
import { DraggableTile } from "@/components/draggable-tile"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const tileOptions = [
  { id: "analytics", label: "Analytics" },
  { id: "calendar", label: "Calendar" },
  { id: "tasks", label: "Tasks" },
  { id: "notes", label: "Notes" },
]

export default function DashboardPage() {
  const [tiles, setTiles] = useState<string[]>([])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragEnd(event: any) {
    const { active, over } = event

    if (active.id !== over.id) {
      setTiles((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  function handleAddTile(value: string) {
    if (!tiles.includes(value)) {
      setTiles([...tiles, value])
    }
  }

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Select onValueChange={handleAddTile}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Add tile" />
            </SelectTrigger>
            <SelectContent>
              {tileOptions.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SortableContext items={tiles} strategy={rectSortingStrategy}>
            {tiles.map((id) => (
              <DraggableTile key={id} id={id} onRemove={() => setTiles(tiles.filter((t) => t !== id))} />
            ))}
          </SortableContext>
        </div>
      </DndContext>

      {tiles.length === 0 && (
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-medium">No tiles added</h3>
            <p className="text-sm text-muted-foreground">Select a tile type from the dropdown above to get started</p>
          </div>
        </div>
      )}
    </div>
  )
}

