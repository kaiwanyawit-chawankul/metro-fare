import { METRO_STATION } from "../types/MetroStation";
import { METRO_FARE } from "../common/fare";
import { graphService, metroGraph } from "./graph.service";

export type TravelRoute = {
    route: METRO_STATION[],
    fare: number,
}

export const FareService = {
    calculate(source: METRO_STATION, destination: METRO_STATION): TravelRoute {
        const route = graphService.findRoute(source, destination, metroGraph);
        return {
            route,
            fare: this.calculateTotalFareFromRoute(route)
        };
    },
    calculateTotalFareFromRoute(route: METRO_STATION[]): number {
        const hops = route.length - 1;
        if (hops > 13) {
            return METRO_FARE.MRT_BLUE[13];
        }
        return METRO_FARE.MRT_BLUE[hops];
    }
}