import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage, faFilePdf, faFileVideo } from "@fortawesome/free-regular-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { getSelectedOperation, getUserCredentials } from "../../selectors/accountSelectors";
import { openAttachmentPopup, downloadAttachmentLink } from "../../util/attachmentHelper";

import { fetchAttachment } from "../../util/infoexApiService";

const AttachmentLink = styled.button`
  cursor: pointer;
  color: ${Colors.Cerulean};
`;

const openAttachment = async props => {
  const { uuid, userCredentials, name, openAttachmentsInNewWindow, download } = props;

  // FetchAttachment makes a POST request and needs email and password.
  const headerData = { ...userCredentials };

  // Fetch the attachment
  const attachmentPromise = await fetchAttachment(uuid, headerData, handleError);

  // Open Popup window, or download attachment
  if (download) downloadAttachmentLink(attachmentPromise, name);
  else openAttachmentPopup(attachmentPromise, openAttachmentsInNewWindow);

  function handleError(/*error*/) {
    // TODO: do something with error. Maybe pop a modal?
  }
};

export const AttachmentComponent = props => {
  // TODO: All of these props are available in case we need them later.
  const {
    name,
    type,
    // prettySize,
    // size,
    // status,
    // uuid,
    // userCredentials,
    // openAttachmentsInNewWindow,
  } = props;

  const [icon, setIcon] = useState(false);
  const [download, setDownload] = useState(false);

  useEffect(() => {
    // TODO: we could support only a few file types that are well supported by browsers, and everything else defaults to a download.
    if (type.startsWith("image/")) {
      setIcon(faFileImage);
    } else if (type.startsWith("video/")) {
      setIcon(faFileVideo);
    } else if (type == "application/pdf") {
      setIcon(faFilePdf);
    } else {
      setIcon(faFileDownload);
      setDownload(true);
    }
  });

  return (
    <AttachmentLink
      onClick={() => {
        openAttachment({ ...props, download });
      }}
    >
      <FontAwesomeIcon icon={icon} />
      {name}
    </AttachmentLink>
  );
};

export const AttachmentList = attachments => {
  return Object.values(attachments).map(attachment => (
    <Attachment {...attachment} key={attachment.uuid} />
  ));
};

const mapStateToProps = state => ({
  userCredentials: getUserCredentials(state),
  openAttachmentsInNewWindow: getSelectedOperation(state).attachmentsInNewWindow,
});

export const Attachment = connect(mapStateToProps)(AttachmentComponent);
