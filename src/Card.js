import React from "react";

function Card(props){
    console.log(props.card)
    return (
    <div class="col-xl-3 col-md-6 mb-4">
    <div class={`card border-left-${props.card.color} shadow h-100 py-2`}>
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        {props.card.title}</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{props.card.value+props.card.sign}</div>
                </div>
                <div class="col-auto">
                <i class={`fas ${props.card.icon} fa-2x text-gray-300`}></i>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Card;