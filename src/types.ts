


export interface Event {
    id: number
    category: string
    title: string
    description: string
    location: string
    date: string
    time: string
    petsAllowed: boolean
    organizer: Organizer
    participant: Participant
  }
  export interface Organizer {
    id: number
    name: string
  }
  export interface Participant {
    id: number
    name: string
    telNo: string
  }
  export interface Student {
    id: number
    studentId: string
    name: string
    surname: string
    gpa: number
    image: string
    description: string
  }
  export interface MessageState {
    message: string
  }

  export interface EventState {
    event: Event | null
  }

  export interface OrganizerState {
    organizer: Organizer | null
  }

  export interface ParticipantState {
    participant: Participant | null
  }

  export interface AuctionItem {
    id: number
    name: string
    description: string
    successfulBid: boolean
  }

  export interface AuctionItemState {
    auctionItem: AuctionItem | null
  }