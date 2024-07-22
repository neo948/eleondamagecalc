# Damage-Calculator

This is the repository for the Eleon Adventures Damage Calculator

## Contributing

There are 3 areas you can contribute to: eleon data, moves data, and set data.

For eleon data, follow this template: 

```js
   bombossic: {
        name: "Bombossic",
        number: 06,
        types: ["Pyro", "Electric"],
        passive: ["Thermal Power"],
        hPassive: ["Victory Lap"],
        finalEvo: true,
        weight: 39,
        height: 59,
        baseStats: {
            hp: 80,
            attack: 130,
            defense: 73,
            attackM: 100,
            defenseM: 66,
            speed: 81
        }
    },
```

For move data, follow this template: 

```js
    rapidFire: {
        name: "Rapid Fire",
        power: 20,
        type: "Pyro",
        mr: "Ranged",
        contact: true,
        hits: 3,
        aoe: true,
        secondaryEffect: true
    }
```
If the move doesn't make contact, is single hit, not aoe, or doesn't have a secondary effect, don't include that property at all. The first 4 must be included, last 4 are optional. 
 Please be aware that everything is case sensitive so natures must be lowercase, abilities, items, and moves all capitalized. I'd recommend keeping level at level 50. Other than that, make any set you want.
