import { useRef, useEffect } from "react";

const createRootElement = (id: string) => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
};

const addRootElement = (rootElem: Element) => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild!.nextElementSibling
  );
};

const defaultOptions = {
  replace: true,
};

const usePortal = (
  id: string,
  options: { replace: boolean; className?: string } = defaultOptions
): HTMLElement => {
  const rootElemRef = useRef<any | null>(null);

  useEffect(
    function setupElement() {
      // Look for existing target dom element to append to
      const existingParent = document.getElementById(id);
      if (id === "app-user-menu") {
        console.log(existingParent);
        console.log(rootElemRef.current);
      }

      // Parent is either a new root or the existing dom element
      const parentElem = existingParent || createRootElement(id);

      // If there is no existing DOM element, add a new one.
      if (!existingParent) {
        addRootElement(parentElem);
      }

      // replace div by the one deeper
      if (options.replace) {
        parentElem.replaceWith(rootElemRef.current!);
      } else {
        parentElem.appendChild(rootElemRef.current!);
      }

      return function removeElement() {
        rootElemRef.current!.remove();
        if (!parentElem.childElementCount) {
          parentElem.remove();
        }
      };
    },
    [id]
  );

  const getRootElem = (): HTMLElement | null => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
      rootElemRef.current.className = options.className;
    }
    return rootElemRef.current;
  };

  return getRootElem()!;
};

export default usePortal;
