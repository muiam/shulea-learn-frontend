"use strict";
// app/layout.tsx
exports.__esModule = true;
require("./globals.css");
var react_1 = require("@nextui-org/react");
var userContext_1 = require("./learner/(userContext)/userContext");
var google_1 = require("next/font/google");
var sonner_1 = require("@/components/ui/sonner");
var head_1 = require("next/head");
var myAppFont = google_1.Nunito({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "shulea learn - Teach, Learn, Earn!",
//   description:
//     "shulea learn is learning platform that enables tutors create lessons , enroll learners easily , receive enrollment fees into their wallets and offer training with resource sharing all under one roof",
// };
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "shulea learn - Teach, Learn, Earn!"),
            React.createElement("meta", { name: "description", content: "hulea learn is learning platform that enables tutors create lessons , enroll learners easily , receive enrollment fees into their wallets and offer training with resource sharing all under one roof" }),
            React.createElement("meta", { property: "og:image:type", content: "image/svg" }),
            React.createElement("meta", { property: "og:image:width", content: "1200" }),
            React.createElement("meta", { property: "og:image:height", content: "630" }),
            React.createElement("meta", { property: "og:image", content: "https://shulea-learn-frontend.vercel.app/logo.svg" }),
            React.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
            React.createElement("meta", { name: "twitter:title", content: "shulea learn - Teach, Learn, Earn!" }),
            React.createElement("meta", { name: "twitter:description", content: "shulea learn is learning platform that enables tutors create lessons , enroll learners easily , receive enrollment fees into their wallets and offer training with resource sharing all under one roof." }),
            React.createElement("meta", { name: "twitter:image", content: "https://shulea-learn-frontend.vercel.app/logo.svg" })),
        React.createElement("body", { className: myAppFont.className },
            React.createElement(react_1.NextUIProvider, null,
                React.createElement(userContext_1.UserProvider, null,
                    children,
                    React.createElement(sonner_1.Toaster, null))))));
}
exports["default"] = RootLayout;
