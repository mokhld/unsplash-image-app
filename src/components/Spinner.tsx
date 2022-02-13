import React from "react";

const pxToRem = (px: number, baseSize = 16): string => {
	const remValue = px / baseSize;

	return `${remValue}rem`;
};

const Spinner: React.FC = () => {
	return (
		<React.Fragment>
			<div className="image-loading"></div>
			<style>{`
				@keyframes rotate {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				div.image-loading {
					width: ${pxToRem(25)};
					height: ${pxToRem(25)};
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 1;
				}

				div.image-loading:after {
					content: "";
					width: 100%;
					height: 100%;
					display: block;
					border: ${pxToRem(4)} solid transparent;
					border-left-color: var(--spinner-color, var(--primary-color));
					border-top-color: var(--spinner-color, var(--primary-color));
					border-radius: ${pxToRem(50)};
					animation: rotate 1s linear infinite;
				}

				@media only screen and (min-width: ${pxToRem(768)}) {
					div.image-loading {
						width: ${pxToRem(50)};
						height: ${pxToRem(50)};
					}
				}

				@media only screen and (max-width: ${pxToRem(575)}) {
					div.image-loading {
						position: absolute;
						top: 54%;
						left: 50%;
					}
				}
			`}</style>
		</React.Fragment>
	);
};

export default Spinner;
