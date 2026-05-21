"use client"

import { useRef, useEffect } from "react"
import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.inert = !isOpen
    }
  }, [isOpen])

  return (
    <div
      ref={sidebarRef}
      aria-hidden={!isOpen}
      className={`fixed left-0 top-12 z-40 flex h-[calc(100vh-3rem)] w-72 flex-col border-r border-surface-border bg-surface shadow-xl transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
        <span className="text-sm font-semibold text-copy-primary">Projects</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close"
          className="h-7 w-7 text-copy-muted hover:text-copy-primary"
        >
          <X className="h-4 w-4" aria-hidden />
        </Button>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden px-3 py-3">
        <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
          <TabsList className="w-full">
            <TabsTrigger value="my-projects" className="flex-1">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="shared" className="flex-1">
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="mt-3 flex-1">
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-copy-muted">No projects yet.</p>
            </div>
          </TabsContent>

          <TabsContent value="shared" className="mt-3 flex-1">
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-copy-muted">No shared projects yet.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="border-t border-surface-border p-3">
        <Button className="w-full gap-2 bg-brand text-base hover:bg-brand/90">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  )
}
