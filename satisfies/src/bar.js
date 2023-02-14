
/**
 * @type {Record<string, ((e: Event) => void) | undefined>}
 */
export let eventHandlers = {
    click: (e) => {
        e.preventDefault();
    },
    scroll: (e) => {

    },
};

// eventHandlers.clock(new Event("click"));
// eventHandlers.click(new Event("click"));
