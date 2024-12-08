"use client";

import { RiddlerInfo, LocationInfo } from "@/utils/riddler";
import { useEffect, useState, useRef } from "react";
import { UAParser } from "ua-parser-js";

export const RiddlerModal = ({
  info,
  isModalOpen,
  onClose,
  geolocation,
}: {
  info: RiddlerInfo;
  isModalOpen: boolean;
  onClose: () => void;
  geolocation: LocationInfo | null;
}) => {
  const [parserResult, setParserResult] = useState<UAParser.IResult>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const parser = UAParser();
    setParserResult(parser);
  }, []);

  useEffect(() => {
    if (dialogRef.current) {
      if (isModalOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="modal modal-bottom sm:modal-middle"
      onClose={onClose}
    >
      <div className="modal-box bg-neutral text-neutral-content">
        <div className="text-center" aria-label="Device Information">
          <h3 className="text-7xl font-bold">?</h3>
          <p
            className="mt-2 inline-block animate-bounce"
            aria-label="Down Arrow"
          >
            👇
          </p>

          <dl className="text-center">
            <div>
              <dt className="inline">
                <strong>{info.device}:</strong>
              </dt>
              <dd className="ml-1 inline">
                {parserResult?.device.vendor} {parserResult?.device.model}
              </dd>
            </div>
            <div>
              <dt className="inline">
                <strong>{info.os}:</strong>
              </dt>
              <dd className="ml-1 inline">
                {parserResult?.os.name} - {info.version}:{" "}
                {parserResult?.os.version}
              </dd>
            </div>
            <div>
              <dt className="inline">
                <strong>{info.browser}:</strong>
              </dt>
              <dd className="ml-1 inline">
                {parserResult?.browser.name} - {info.version}:{" "}
                {parserResult?.browser.version}
              </dd>
            </div>
          </dl>

          {geolocation && (
            <>
              <p
                className="mt-2 inline-block animate-bounce"
                aria-label="Down Arrow"
              >
                🌎
              </p>
              <dl className="text-center">
                {geolocation.city && (
                  <div>
                    <dt className="inline">
                      <strong>{info.city}:</strong>
                    </dt>
                    <dd className="ml-1 inline">{geolocation.city}</dd>
                  </div>
                )}
                {geolocation.country_name && (
                  <div>
                    <dt className="inline">
                      <strong>{info.country}:</strong>
                    </dt>
                    <dd className="ml-1 inline">{geolocation.country_name}</dd>
                  </div>
                )}
              </dl>
            </>
          )}

          <p className="mt-5 text-xs italic">{info.disclaimer}</p>
        </div>
        <div className="modal-action flex flex-col items-center">
          <button className="btn btn-primary" type="button" onClick={onClose}>
            {info.close}
          </button>
        </div>
      </div>
    </dialog>
  );
};
