// services/EventService.js
import { saveToStorage, getFromStorage } from '../utils/utils.js';

const EVENT_KEY = 'events';

class EventService {
    // Criar um novo evento
    static addEvent(event) {
        const events = getFromStorage(EVENT_KEY) || [];
        events.push(event);
        saveToStorage(EVENT_KEY, events);
    }

    // Obter todos os eventos
    static getAllEvents() {
        return getFromStorage(EVENT_KEY) || [];
    }

    // Obter um evento por ID
    static getEventById(eventId) {
        const events = getFromStorage(EVENT_KEY) || [];
        return events.find(event => event.id === eventId);
    }

    // Atualizar um evento
    static updateEvent(updatedEvent) {
        let events = getFromStorage(EVENT_KEY) || [];
        events = events.map(event => event.id === updatedEvent.id ? updatedEvent : event);
        saveToStorage(EVENT_KEY, events);
    }

    // Deletar um evento
    static deleteEvent(eventId) {
        let events = getFromStorage(EVENT_KEY) || [];
        events = events.filter(event => event.id !== eventId);
        saveToStorage(EVENT_KEY, events);
    }

    // Obter todos os eventos relacionados a uma ONG específica
    static getEventsByOng(ongId) {
        const events = getFromStorage(EVENT_KEY) || [];
        return events.filter(event => event.ongId === ongId);
    }
}

export default EventService;
