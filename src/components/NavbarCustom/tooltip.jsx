import React, { Component } from "react"
import PropTypes from "prop-types"
import Loadable from "@loadable/component"
const LoadableBuyButton = Loadable(() => import("react-power-tooltip"))
export default LoadableBuyButton