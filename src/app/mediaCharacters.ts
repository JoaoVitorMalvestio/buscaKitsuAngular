export class MediaCharacters {
    id: number;
    type: string;
    links: {
        self: string;
    };
    attributes: {
        createdAt: string;
        updatedAt: string;
        role: string;
    };
    relationships: {
        media: {
            links: {
                self: string;
                related: string;
            };
        };
        character: {
            links: {
                self: string;
                related: string;
            };
        };
        voices: {
            links: {
                self: string;
                related: string;
            };
        };
    };
}
