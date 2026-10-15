# CoreNova Technologies

## Website purpose

This website presents CoreNova Technologies' software engineering services and
projects, and lets visitors contact the company at `contact@corenova.tech`.
The homepage covers enterprise software, the Cove project, telemetry and
simulation, and mobile engineering. Service examples are illustrative workflows.

## Cove project page

`/cove` introduces Cove and explains its features, setup, hosting, and current
limitations. Its product facts come from the owner's Cove repository at
`/Users/nehal/Documents/GitHub/Cove/README.md`, supplied by the user.

Cove is an initial self-hosted desktop app for a trusted small group of friends.
One computer hosts the accounts, groups, messages, and files. Features include
group channels, direct messages, voice rooms with up to eight participants,
camera video, screen sharing, group events, notifications, themes, and appearance
customization. The initial desktop distribution targets Windows x64; the source
also includes an Apple Silicon Mac packaging command and a standalone browser
host. The source license is MIT. Group ownership transfer does not imply host
migration.

There is no required subscription. Users supply the host and network, and
optional remote hosting or call relays can incur costs. Chat is not end-to-end
encrypted; the host can read stored data. Local HTTP requires a trusted private
network. Remote access requires a reachable HTTPS or encrypted VPN host and may
need a TURN relay. Windows builds are unsigned; this version has no automatic
updates or email-based password recovery.

The public GitHub URL returned 404 when checked on 2026-10-13. Do not advertise
a public download or source link until availability is verified. Visitors can
ask about builds and source access through the company email.

## Presentation constraints

The website follows the browser/system light or dark preference automatically
through `prefers-color-scheme`, including changes while a page is open. Shared
semantic color tokens in `app/globals.css` cover the homepage, navigation, Cove
page, and orbital artwork. Browser controls and supported browser chrome use
matching color-scheme and theme-color metadata. Keep the actual Cove app
screenshot and the deliberately mint contact panel in their original colors;
do not invert images or apply a page-wide color filter.

The header groups project pages under a Projects dropdown on desktop and mobile.
Both menus use `app/data/projects.ts`; add future project names, local URLs, and
short descriptions there. Cove links to `/cove`. Keep keyboard access,
Escape-to-close behavior, outside-click dismissal, and current-page indication.

Extend the established CoreNova interface without replacing its identity or
unrelated content. Keep desktop and mobile navigation, keyboard access, and
reduced-motion support. The Cove screenshot shows the actual app with fictional
demo accounts and messages; retain its explanatory caption. Do not present
demo content as customer evidence or invent product features, metrics, or
availability claims. Existing styling lives in `app/globals.css`; Cove-specific
styling is scoped to `app/cove/page.module.css`.
