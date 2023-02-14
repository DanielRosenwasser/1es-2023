
export let eventHandlers: Record<string, ((e: Event) => void) | undefined> = {
    click: (e) => {
        e.preventDefault();
    },
    scroll: (e) => {

    },
};

// eventHandlers.clock(new Event("clock"));
// eventHandlers.click(new Event("click"));
