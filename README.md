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

1. Navigate to UI Builder in App Engine Studio
2. Locate and add component to page


### Bind Data
- Create a Data Resource Instance.
- 
- Return all desired fields

### Assign Event

- Go to "Your instance name here".service-now.com/sys_ux_event_list
- Click "New" to create event.
- Event Name should be the same from index.js file under "actionHandlers".
- Inside of Porperties you want to list the ones you plan to use. 
---
Example for sys_id and table:
    
    [
        {
            "name":"sysId",
            "fieldType":"string",
            "label":"SysId",
            "interfaceApiName":"global.route",
            "typeMetadata":null,
            "mandatory":false,
            "readOnly":false
        },
        {
            "name":"table",
            "fieldType":"string",
            "label":"Table",
            "interfaceApiName":"global.route",
            "typeMetadata":null,
            "mandatory":false,
            "readOnly":false
        }
    ]
    
---
- Save event.
- Head to "Your instance name here".service-now.com/sys_ux_macroponent_list.do.
- Search for the component name and open.
- At the top of the page you might need to click "here" in order to edit record.
- Scroll down to "Dispatched Events" and add the event you created.
- Check UI Builder and see if your component can add event handler.
- Assign event handler you want to use.
