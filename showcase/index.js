import BatteryManager from '../src'


new BatteryManager({
  onChargingChange: console.log,
  onLevelChange: console.log
});