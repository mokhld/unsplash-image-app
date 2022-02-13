// TYPES
export interface Photo {
	urls: string;
}

// PHOTO CARD
export interface PhotoCardType {
	item: Photo;
	setOpen: Function;
}

// POPUP
export interface PopupType {
	picture: string;
	setOpen: Function;
}
