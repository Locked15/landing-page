import React from "react";
import "../../../index.css";

/**
 * Функция, создающая подблок 'Туры во Вьетнам'.
 * Как и прочие, состоит из 3 изображений туров с указанием цены.
 * 
 * @returns Подблок 'Туры во Вьетнам'.
 */
function ToursToVietnam() {
	return (
		<div>
			<h3 className='subheader-text'>Вьетнам</h3>

			<div className='flex-gallery gallery'>
				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Вьетнам/Нянчанг.jpg")}
						alt='Вьетнам-1.'
					/>

					<figcaption>Нянчанг — 32.600 Р.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Вьетнам/Нянчанг 2.jpg")}
						alt='Вьетнам-2.'
					/>

					<figcaption>Нянчанг — 34.666 Р.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Вьетнам/Нянчанг 3.jpg")}
						alt='Вьетнам-3.'
					/>

					<figcaption>Нянчанг — 34.100 Р.</figcaption>
				</figure>
			</div>
		</div>
	);
}

export default ToursToVietnam;
