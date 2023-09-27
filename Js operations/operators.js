
let shipHealth = 3;
let ammo = 10;
let targetHealth = 3;
function isHit() {
  return Math.random() > 0.5;
}
function shipCanFire() {
  return shipHealth > 0 && ammo > 0;
}


function isDestroyed(health) {
  return health <= 0;
}
function reloadShip() {
  if (shipHealth > 0) {
    shipHealth -= 1;
    ammo += 3;
  }
}
while (!isDestroyed(shipHealth) && shipCanFire()) {
  if (isHit()) {
    console.log("Enemy hit!");
    reloadShip();
  } else {
    console.log("Enemy missed!");
  }
  ammo -= 1;
}

if (isDestroyed(shipHealth)) {
  console.log("Your ship is destroyed!");
} else {
  console.log("You ran out of ammo!");
}
encounter();
