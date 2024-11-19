// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GAkXaJ2X7qEVGyLW6URkW
// Component: 4spuvqDqcbmi
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: -LisnOPJofcL/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 5GAkXaJ2X7qEVGyLW6URkW/projectcss
import sty from "./PlasmicBotonLugares.module.css"; // plasmic-import: 4spuvqDqcbmi/css

createPlasmicElementProxy;

export const PlasmicBotonLugares__VariantProps = new Array();

export const PlasmicBotonLugares__ArgProps = new Array();

const $$ = {};

function PlasmicBotonLugares__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
      color={"blue"}
      shape={"rounded"}
      size={"compact"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"2"}
        </div>
      </div>
    </Button>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBotonLugares__ArgProps,
          internalVariantPropNames: PlasmicBotonLugares__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBotonLugares__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBotonLugares";
  } else {
    func.displayName = `PlasmicBotonLugares.${nodeName}`;
  }
  return func;
}

export const PlasmicBotonLugares = Object.assign(
  // Top-level PlasmicBotonLugares renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicBotonLugares
    internalVariantProps: PlasmicBotonLugares__VariantProps,
    internalArgProps: PlasmicBotonLugares__ArgProps
  }
);

export default PlasmicBotonLugares;
/* prettier-ignore-end */
