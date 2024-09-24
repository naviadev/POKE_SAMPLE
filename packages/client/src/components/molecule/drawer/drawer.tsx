import * as React from "react";
import { Button } from "@/components/atom/shad/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/atom/shad/drawer";
import CircleButton from "@/components/atom/circleButton";
import { LuSettings2 } from "react-icons/lu";

interface DrawerProps {
  title: string;
  subtitle: string;
  approveButtonText: string;
  cancelButtonText: string;
  children: React.ReactNode;
  approveEvent?: () => any;
}

const DrawerComponent: React.FC<DrawerProps> = ({
  title,
  subtitle,
  children,
  approveButtonText,
  cancelButtonText,
  approveEvent,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>
        <CircleButton onClick={() => setIsOpen(true)} key={123}>
          <LuSettings2 />
        </CircleButton>
      </DrawerTrigger>
      <DrawerContent className="h-[600px] z-50">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{subtitle}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 flex flex-col justify-center items-center gap-4">
            {children}
          </div>
          <DrawerFooter className="flex-row gap-4 justify-center items-center">
            <Button
              onClick={async () => {
                if (approveEvent) {
                  try {
                    const response = await approveEvent();
                    setIsOpen(false);
                  } catch (error) {
                    alert("실패"); // 테스트용
                    console.error(error);
                  }
                }
              }}
            >
              {approveButtonText}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                {cancelButtonText}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
