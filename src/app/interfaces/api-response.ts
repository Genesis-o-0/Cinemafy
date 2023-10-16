import { MovieDetails } from "./movie";


export interface ApiResponse {
    page: number,
    results: MovieDetails[],
    total_pages: number,
    total_results: number
}
