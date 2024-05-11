export const showHmenu = () => {
    const hmenu = document.querySelector("#hmenu") as HTMLElement
    const hmenuFade = document.querySelector("#hmenuFade") as HTMLElement
    hmenu.style.transform = "translateX(0)"
    hmenuFade.style.opacity = "1"
    hmenuFade.style.pointerEvents = "all"
}
export const hideHmenu = () => {
    const hmenu = document.querySelector("#hmenu") as HTMLElement
    const hmenuFade = document.querySelector("#hmenuFade") as HTMLElement
    hmenu.style.transform = "translateX(-100%)"
    hmenuFade.style.opacity = "0"
    hmenuFade.style.pointerEvents = "none"
    //hmenuFade.style.display = "none"
}