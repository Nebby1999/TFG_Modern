const registerAFCItemTags = (event) =>{
    global.AFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
    
    global.AFC_SOFTWOOD_TYPES.forEach(item =>{
        event.add('firmaciv:planks', `afc:wood/planks/${item}`)
    })
    global.AFC_HARDWOOD_TYPES.forEach(item =>{
        event.add('firmaciv:planks', `afc:wood/planks/${item}`)
        event.add('firmaciv:planks_that_make_ships', `afc:wood/planks/${item}`)
    })
}

const registerAFCBlockTags = (event) =>{
    global.AFC_DISABLED_ITEMS.forEach(block => {
        event.removeAllTagsFrom(block)
    })

    global.AFC_SOFTWOOD_TYPES.forEach(block =>{
        event.add('firmaciv:can_make_canoe', `afc:wood/stripped_log/${block}`)
    })
}