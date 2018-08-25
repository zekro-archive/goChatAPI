 <div align="center"></div>
     <h1>~ goChatAPI ~</h1>
     <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" height="30" />&nbsp;
     <img src="https://forthebadge.com/images/badges/built-with-love.svg" height="30" />&nbsp;
 </div>

---

This is a Bot API/Wrapper for [ZekrosTJA goChat](https://www.github.com/zekroTJA/goChat)

---

## Required Pakckages:

- ws 

---

# Installaton

`$ npm i --save gochatapi`
## Events

**Eventname** | **What it parse** | **Description**
|----|----|----|
| Bot_loggedin | -/- | Gets called when the Client logges in |
| Bot_disconnected | -/- | Gets called when the Client disconnect |
| Bot_error | error | Gets called when the **Websocket** throws an error |
| Client_connected | name | Gets called when a new User connect to the Chat |
| Client_disconnected | name | Gets called when a User disconnect from the Chat |
| message | message, username, color | Gets called when a User write a message |

---

## Finctions

**Functionname** | **What they need** | **Description**
|----|----|----|
| new Bot | Nickname **String**, Url **String**, Prefix **String** | starts the Bot session |
| send | message **String** | Sends a message in the Chat |
| get_prefix | -/- | Give you the current Prefix |
| set_prefix | prefix **String** | Set the Prefix to the given Parameter |
| get_name | -/- | Give you the current Nickname |
| set_name | name **String** | Sets the Nickname to the given Name |

---

# How to use Events

Every Event is in the [example file](https://github.com/dasphantom04/goChatAPI/blob/master/example/example.js) listed

---

# How to use Functions

**This is a example**

```javascript
const Bot = require('goChatAPI');

var bot1 = new Bot("Bot", "url", "Prefix");

bot1.send("Im cool");

```

