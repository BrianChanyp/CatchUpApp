import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

//import of google fonts
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

export default function App() {
	//Loading of font Oswald
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	//loading of font Lato
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});
	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	//return of  the application in layers
	return (
		<>
			<ThemeProvider theme={theme}>
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<Navigation />
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
