const galleryContainer = document.querySelector(".gallery");
const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
const indicator = document.querySelector(".indicator");

const defaultItemFlex = "0 1 5%";
const hoverItemFlex = "1 1 200%";

const updateGalleryItems = () => {
    galleryItems.forEach((item) => {
        let flex = defaultItemFlex;

        if (item.classList.contains("hovered")) {
            flex = hoverItemFlex;
        }

        item.style.flex = flex;
    });
};

galleryItems[0].isHovered = true;
updateGalleryItems();

galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        galleryItems.forEach((otherItem) => {
            otherItem.classList.remove("hovered");
        });
        item.classList.add("hovered");
        updateGalleryItems();
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("hovered");
        updateGalleryItems();
    });
});

galleryContainer.addEventListener("mousemove", (e) => {
    indicator.style.left = `${
        e.clientX - galleryContainer.getBoundingClientRect().left}px`;
});