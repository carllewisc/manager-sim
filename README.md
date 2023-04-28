# Manager Sim Assistant

Manager Sim Assistant is an efficient and easy-to-use CLI for managing iOS and Android emulators, streamlining the process of managing applications and devices in development environments. It's perfect for mobile app developers looking to enhance productivity across both platforms.

## Features

- List available emulators for iOS
  - [ ] **Note:** Android support is pending
- Start and shutdown emulators
- Reset emulators to their original state
- [ ] Install and uninstall apps on emulators
- [ ] Launch and terminate apps on emulators
- [ ] Take screenshots and record videos from emulators
- [ ] Open URLs on emulators

## Installation

To install Manager Sim Assistant, run the following command:

```bash
npm install -g manager-sim
```

Or, if you prefer using Yarn:

```bash
yarn global add manager-sim
```

- **List available devices:**
```bash
manager-sim list-devices
```

- **Start a specific device:** 
```bash
manager-sim start-device <device-id>
```

- **Shutdown a specific device:**
```bash
manager-sim shutdown-device <device-id>
```

- **Reset a specific device:**
```bash
manager-sim reset-device <device_id>
```
