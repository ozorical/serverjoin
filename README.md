

---

## Server Joiner Script

**Description:**
A simple Minecraft Bedrock script that automatically transfers players to another server when they spawn. Great for hub or lobby servers that redirect players to game servers.

---

### 📦 Requirements

* Minecraft Bedrock Dedicated Server (BDS) with scripting API enabled
* Modules:

  * `@minecraft/server`
  * `@minecraft/server-admin`

---

### ⚙️ Setup

1. Place the script inside your behavior pack folder under `/scripts/`.
2. Open `main.js` and edit this line:

   ```js
   transferPlayer(event.player, { hostname: "your.server.ip", port: 19132 });
   ```

   Replace `"your.server.ip"` with your target server’s address.
3. Load the behavior pack on your server.
4. When a player joins, they’ll automatically be transferred to the specified server.

---

### 🧠 Notes

* If the hostname is blank, nothing happens.
* Default port is `19132` (standard Bedrock port).
* Best used on hub or redirect servers.

---
