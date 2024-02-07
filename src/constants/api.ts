export const API_DOTA_DOMAINS = 'https://api.opendota.com/api';
export const API_DOTA_IMAGES = 'https://cdn.cloudflare.steamstatic.com';

export enum ResponseCode {
	serverError = 500,
	notFound = 404,
	unauthorized = 401,
	success = 200,
	badRequest = 404,
	found = 302,
	forbidden = 403
}

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong';
