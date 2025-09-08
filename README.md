# contact-ts

A TypeScript utility for sharing messages and sending WhatsApp chats, with full test coverage.

## Features

- **shareToWhatsAppp**: Share a message via WhatsApp (mobile or web).
- **sendWhatsapp**: Send a WhatsApp message to a specific contact (mobile or web).
- Mobile/desktop detection.
- Fully tested with Jest and jsdom.

## Usage

### Installation

```sh
pnpm install
```

### Functions

#### shareToWhatsAppp

```typescript
import { shareToWhatsAppp } from "./src/whatsapp";

shareToWhatsAppp("Hello world!");
```

#### sendWhatsapp

```typescript
import { sendWhatsapp } from "./src/whatsapp";

sendWhatsapp(1234567890, "Hello, contact!");
```

## Testing

Run all tests:

```sh
pnpm test
```

## Development

- Written in TypeScript.
- Tests located in `/test`.
- Uses Jest with jsdom for browser-like environment.
