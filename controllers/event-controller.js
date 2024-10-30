import EventService from '../services/event-service.js';

class EventController {
    // Exibir lista de eventos no DOM
    static displayEventList() {
        const events = EventService.getAllEvents(); // Pega todos os eventos do localStorage
        const eventListContainer = document.getElementById('event-list'); // Container onde os eventos serão exibidos
        
        // Limpa o container antes de adicionar novos elementos
        eventListContainer.innerHTML = '';

        if (events.length === 0) {
            eventListContainer.innerHTML = '<p>Nenhum evento disponível.</p>';
            return;
        }

        // Criar a lista de eventos
        events.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.innerText = `${event.name} - ${event.date} - ${event.location}`;
            eventListContainer.appendChild(eventItem); // Adiciona cada evento à lista
        });
    }

    // Função para adicionar um novo evento (só para exemplo, pode ser omitida se não necessário)
    static addNewEvent(name, date, location, description, ngoId) {
        const id = Date.now(); // Gera um ID único baseado no tempo
        const newEvent = { id, name, date, location, description, ngoId };
        EventService.addEvent(newEvent);
    }
}

export default EventController;
