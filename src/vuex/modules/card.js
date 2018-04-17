function _uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
  }
export default {
    state: {
        'country_list': [],
        'full_list':[],
        'filter_text': '',
        'country_filter': '',
        cards:[]
    },
    mutations: {
        reset(stage){
            stage.filter_text = '';
            stage.country_filter = '';
        },
        setFilterText(stage, text = null) {
            stage.filter_text = text;
        },
        setCountryFilter(stage, text = null) {
            stage.country_filter = text;
        },
        setList(stage,list){
            stage.full_list = list
            let temp = new Set(list.map(d => d.country));
            stage.country_list = [...temp].filter(d=>d.length);
        },
        addCard(stage,target){
            target.uuid= _uuid()
            stage.cards.push(target)
        },
        removeCard(stage,uuid){
            stage.cards = stage.cards.filter(d=>d.uuid != uuid)
        }
    },
    actions: {
        reset(context){
            context.commit('reset');
        },
        setFilterText(context, text) {
            context.commit('setFilterText', text);
        },
        setCountryFilter(context, text) {
            context.commit('setCountryFilter', text);
        },
        setList(context){
            fetch('static/data/data.json')
            .then(d=>d.json())
            .then(data=>{
                context.commit('setList',data)
            });
        },
        addCard(context,target,option){
            context.commit('addCard',target,option);
        },
        removeCard(context,index){
            context.commit('removeCard',index);
        }
    },
    getters: {
        full_list_filter: (state) => {
            let rows = state.full_list;
            if(state.filter_text.length > 0){
                rows =  rows.filter(d => {
                    return d.name.indexOf(state.filter_text) >= 0
                })
            } 
            if(state.country_filter.length > 0) {
                rows =  rows.filter(d => {
                    return d.country.indexOf(state.country_filter) >= 0
                })
            }
            return rows;
            
        },
        country_list: (state) => {
            return state.country_list
        },
        cards: (state) => {
            return state.cards
        }
    }
}