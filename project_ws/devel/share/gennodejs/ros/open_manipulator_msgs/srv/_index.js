
"use strict";

let GetKinematicsPose = require('./GetKinematicsPose.js')
let SetDrawingTrajectory = require('./SetDrawingTrajectory.js')
let SetActuatorState = require('./SetActuatorState.js')
let GetJointPosition = require('./GetJointPosition.js')
let SetJointPosition = require('./SetJointPosition.js')
let SetKinematicsPose = require('./SetKinematicsPose.js')

module.exports = {
  GetKinematicsPose: GetKinematicsPose,
  SetDrawingTrajectory: SetDrawingTrajectory,
  SetActuatorState: SetActuatorState,
  GetJointPosition: GetJointPosition,
  SetJointPosition: SetJointPosition,
  SetKinematicsPose: SetKinematicsPose,
};
