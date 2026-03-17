import React from "react";
import { Timeline } from "../general/Timeline";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import UnderlineHeader from "../general/UnderlineHeader";
import Card from "../general/Card";

const ImportantDates = () => {

    const timeline_theme = {
        colors: {
            event: "rgb(206, 70, 70)",
            submission: "#3d8cd1",
            notification: "#FB8C00",
            cameraready: "#922be5",
            other: "#000000"
        },
    };

    const events = [

        /** FEBRUARY */
        { type: "month", label: "February 2026" },
        { date: '10-Feb-26', title: 'Workshop Proposals Deadline', color: timeline_theme.colors.submission },
        { date: '24-Feb-26', title: 'Workshop Notifications to Proposers', color: timeline_theme.colors.notification },

        /** MARCH */
        { type: "month", label: "March 2026" },
        { date: '20-Mar-26', title: 'Workshop Website and CfP Available Online', color: timeline_theme.colors.other },

        { date: '03-Apr-26', title: 'Challenge Workshops Release Datasets', color: timeline_theme.colors.other },

        /** MAY */
        { type: "month", label: "May 2026" },
        { date: '02-May-26', title: 'Research, Resource, In-Use Track Abstract Submission', color: timeline_theme.colors.submission },
        { date: '07-May-26', title: 'Research, Resource, In-Use Track Full Paper Submission', color: timeline_theme.colors.submission },

        /** JUNE */
        { type: "month", label: "June 2026" },
        { date: '01-Jun-26', title: 'Doctoral Consortium Track Submission', color: timeline_theme.colors.submission },
        { date: '09-Jun-26', title: 'Tutorials Track Submission', color: timeline_theme.colors.submission },
        { date: '23-Jun-26', title: 'Tutorials Track Notification', color: timeline_theme.colors.notification },
        { date: '26-Jun-26', title: 'Challenge Solution Submission', color: timeline_theme.colors.submission },

        /** JULY */
        { type: "month", label: "July 2026" },
        { date: '06-Jul-26', title: 'Doctoral Consortium Notification', color: timeline_theme.colors.notification },
        { date: '07-Jul-26', title: 'Industry Track Submission', color: timeline_theme.colors.submission },
        { date: '16-Jul-26', title: 'Research, Resource, In-Use Track Notifications', color: timeline_theme.colors.notification },
        { date: '24-Jul-26', title: 'Workshop Paper Submission', color: timeline_theme.colors.submission },
        { date: '21-Jul-26', title: 'Tutorial Website Online', color: timeline_theme.colors.other },
        { date: '24-Jul-26', title: 'Posters and Demos Track Submission', color: timeline_theme.colors.submission },
        { date: '27-Jul-26', title: 'Revised Doctoral Consortium Submission', color: timeline_theme.colors.submission },
        { date: '31-Jul-26', title: 'Tutorial Materials Available on the Website (if any)', color: timeline_theme.colors.other },

        /** AUGUST */
        { type: "month", label: "August 2026" },
        { date: '03-Aug-26', title: 'Doctoral Consortium Track Camera Ready', color: timeline_theme.colors.cameraready },
        { date: '04-Aug-26', title: 'Industry Track Notification', color: timeline_theme.colors.notification },
        { date: '06-Aug-26', title: 'Research, Resource, In-Use Track Camera Ready', color: timeline_theme.colors.cameraready },
        { date: '21-Aug-26', title: 'Posters and Demos Track Notification', color: timeline_theme.colors.notification },
        { date: '21-Aug-26', title: 'Workshop Program with Accepted Papers Available Online', color: timeline_theme.colors.notification },


        /** SEPTEMBER */
        { type: "month", label: "September 2026" },
        { date: '04-Sep-26', title: 'Posters and Demos Track Camera Ready', color: timeline_theme.colors.cameraready },
        { date: '11-Sep-26', title: 'Industry Track Camera Ready', color: timeline_theme.colors.cameraready },

        /** OCTOBER */
        { type: "month", label: "ISWC 2026 Events in October" },
        { date: '25-26 Oct-26', title: 'Workshop Days', color: timeline_theme.colors.event },
        { date: '25-26 Oct-26', title: 'Tutorial Days', color: timeline_theme.colors.event },
        { date: '26 Oct-26', title: 'Doctoral Consortium Day', color: timeline_theme.colors.event },
        { date: '27-29 Oct-26', title: 'Conference Days', color: timeline_theme.colors.event },


    ];

    return (
        <BaseContainer>
            <Header>Important Dates</Header>
            <Card>
                <p><em>This timeline will be updated as new information, news, and events become available. Please review it periodically for the latest updates and newly announced dates.</em></p>
            </Card>

            <Timeline data={events} />
        </BaseContainer>
    );
};


export default ImportantDates;
