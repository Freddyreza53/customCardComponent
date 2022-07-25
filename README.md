# Custom card component

custom-card-component

## Getting Started

### Prerequisites

- UI Framework installed and configured configured with profile (steps 1-3 from https://creator-dna.com/blog/macos-setup).
- Node, not newest version, v12.16.1 is mentioned on https://developer.servicenow.com/dev.do#!/reference/now-experience/sandiego/cli/faqs (seems to work just fine with v14.20.0).
- Python 2

### Installation

1. Clone this repository
2. Run `npm install` in your terminal
3. Run `snc ui-component deploy` in your terminal

## How To Use

### Add Component

- Navigate to UI Builder in App Engine Studio
- Locate and add component to page

### Bind Data
- Create a Data Resource Instance.
- Return all desired fields

### Client Script

- Go to Client Scripts.
- Click "+ADD" to add page script.
- Update handler function to match:
    ```
    function handler({api, event, helpers, imports}) {
        const {emit} = api;
        const sysId = event.payload.sysId;
        const table = event.payload.table;
        try {
            if (sysId) {
                // dispatch action with app route and route parameters
                emit('NAV_ITEM_SELECTED', {
                    route: "record",
                    fields: {
                        table,
                        sysId
                    }
                });
            }
        } catch (e) {}
    }
    ```

### Assign Event

- Go to "Your instance name here".service-now.com/sys_ux_event_list
- Click "New" to create event.
- Event Name should be the same from index.js file under "actionHandlers".
- Save event.
- Head to "Your instance name here".service-now.com/sys_ux_macroponent_list.do.
- Search for the component name and open.
- At the top of the page you might need to click "here" in order to edit record.
- Scroll down to "Dispatched Events" and add the event you created.
- Check UI Builder and see if your component can add event handler.
- Assign client script that you created.
