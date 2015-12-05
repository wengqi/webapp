<div>
    {% for laptop in laptops %}
      <div style='float: left; width: 210px; overflow: hidden; white-space: nowrap; height: 265px;'>
        <div style='margin: 5px; margin-bottom: 3px;'>
            <img width=160 height=120 style="display: block;" src="{{ laptop.img }}" />
        </div>
        <div style='margin: 5px; margin-left: 10px; margin-bottom: 3px;'>
            <div><i>{{laptop.model}}</i></div>
            <div>Price: ${{laptop.price}}</div>
            <div>RAM: {{laptop.ram}}</div>
            <div>HDD: {{laptop.hdd}}</div>
            <div>CPU: {{laptop.cpu}}</div>
            <div>Display: {{laptop.display}}</div>
        </div>
        <button class='buy' style='margin: 5px; width: 80px; left: -40px; position: relative; margin-left: 50%; margin-bottom: 3px;'>Buy</button>
        </div>
    {% endfor %}
</div>