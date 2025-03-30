import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactIcon, HomeIcon, InfoIcon, Plus } from "lucide-react";

export default function Home() {
  return (
    <>
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <Tabs defaultValue="pages" className="w-full p-4">
                <TabsList className="w-full ">
                  <TabsTrigger
                    value="pages"
                    className="data-[state=active]:bg-accent"
                  >
                    Pages
                  </TabsTrigger>
                  <TabsTrigger
                    value="layers"
                    className="data-[state=active]:bg-accent"
                  >
                    Layers
                  </TabsTrigger>
                  <TabsTrigger
                    value="components"
                    className="data-[state=active]:bg-accent"
                  >
                    Components
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="pages" className="mt-4 space-y-2">
                  <div draggable className="bg-zinc-900/30 p-4 rounded-md">
                    Home
                  </div>
                </TabsContent>

                <TabsContent value="layers" className="mt-4 space-y-2">
                  <SidebarMenuButton className="w-full flex items-center gap-2 px-4 py-2 hover:bg-accent/50 rounded-md transition-colors">
                    <Plus className="h-4 w-4" />
                    <span>Add Layer</span>
                  </SidebarMenuButton>
                </TabsContent>

                <TabsContent value="components" className="mt-4 space-y-2">
                  <SidebarMenuButton className="w-full flex items-center gap-2 px-4 py-2 hover:bg-accent/50 rounded-md transition-colors">
                    <Plus className="h-4 w-4" />
                    <span>Add Component</span>
                  </SidebarMenuButton>
                </TabsContent>
              </Tabs>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
      <main>
        <h1 className="text-white">Do you wanna play with my Bionicles? Yes</h1>
      </main>
      <SidebarProvider>
        <Sidebar side="right">
          <SidebarHeader className="font-medium border-b p-4">
            Properties:{" "}
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarGroup>
                <SidebarMenu>
                  <SidebarMenuItem className="text-sm">Text</SidebarMenuItem>
                  <Input />
                </SidebarMenu>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </>
  );
}
