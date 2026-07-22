import React from "react";
import Page from "./Page";

/**
 * Legacy alias for <Page>. Kept so existing pages keep working while they are
 * migrated; prefer importing Page directly in new code.
 */
export const BaseContainer = ({ children, ...rest }) => <Page {...rest}>{children}</Page>;

export default BaseContainer;
