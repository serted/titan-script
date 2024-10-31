   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(96474789, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', '208614513865005');
   fbq('track', 'PageView');
const months=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],date=new Date;date.setDate(date.getDate()+1);const today=date.getDate()+' '+months[date.getMonth()];date.setDate(date.getDate()-6);const fivedaysago=date.getDate()+' '+months[date.getMonth()];$('.product-discount-info #discount-date').html('с '+fivedaysago+' по '+today);const now=new Date,hour=now.getHours();now.getHours()<=12?$('.deliverydate').html(now.getDate()+' '+months[now.getMonth()]):(now.setDate(now.getDate()+1),$('.deliverydate').html(now.getDate()+' '+months[now.getMonth()])),$('.product-slider').slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,variableWidth:!0,pauseOnFocus:!1,pauseOnHover:!1}),$('.delivery_variant').click(function(){const e=$(this);e.hasClass('open')?e.find('.delivery_text').slideUp(400,function(){e.removeClass('open')}):($('.delivery_variant.open').each(function(){const e=$(this);e.find('.delivery_text').slideUp(400,function(){e.removeClass('open')})}),e.addClass('open'),e.find('.delivery_text').slideDown(400))}),$('form input[name=pack]').val($('.complect-variant.active').attr('pack')),$('form input[name=variant_name]').val($('.complect-variant.active').data('name')),$('.scrolltoform').click(function(){$([document.documentElement,document.body]).animate({scrollTop:$('#type').offset().top},700)}),$(window).scroll(function(){$(window).scrollTop()>900&&$(window).scrollTop()<=5e3?$('.buttonfixed').addClass('show'):$('.buttonfixed').removeClass('show')});let defaultImage=document.querySelector('.item-big-thumb img').src,selectedTypesArray=[],selectedColorsArray=[],activeColor;function updateGoods(){const e=[];e.push('Вид:','\n'),selectedTypesArray.forEach(t=>{e.push(t.type),e.push(',')}),e.push('\n','\n','Цвет:','\n'),selectedColorsArray.forEach(t=>{e.push(t.color)}),e.push('\n','\n','Количество:','\n'),e.push($('.complect-variant.active .complect-info-count-data-header')[0].innerText,' - ',$('.complect-variant.active .complect-info-price-newprice')[0].innerText),document.querySelector('textarea[name="goods"]').value=e.join(''),document.querySelector('input[name="price"]').value=$('.complect-variant.active .complect-info-price-newprice')[0].innerText.replace(/\D/g,'')}function updateActiveColor(){document.querySelector('.active-color').textContent=`Цвет: ${selectedColorsArray.map(e=>e.color).join(', ')}`}function updateImage(){const e=document.querySelector('input[name="type"]:checked').dataset.colortype,t=document.querySelector('input[name="color"]:checked').dataset.colortype,n=`img/${e}-${t}.avif`;document.querySelector('.item-big-thumb img').src=n,document.getElementById('mainImage').src=n}document.querySelectorAll('input[name="type"]').forEach(e=>{e.addEventListener('change',function(){selectedTypesArray=[{type:this.dataset.type}],updateImage(),updateGoods()})}),document.querySelectorAll('input[name="color"]').forEach(e=>{e.addEventListener('change',function(){selectedColorsArray=[{type:this.dataset.type,color:this.dataset.color}],updateImage(),updateGoods(),updateActiveColor()})}),$('.complect-variant').click(function(){$('.complect-variant.active').removeClass('active'),$(this).addClass('active'),$('form input[name=pack]').val($(this).attr('pack')),$('form input[name=variant_name]').val($('.complect-variant.active').data('name')),updateGoods()});function validateCheckboxGroups(){console.log('Validating checkbox groups');const e=document.querySelectorAll('.checkbox-group');let t=!0,n=null;return e.forEach(e=>{const o=e.querySelectorAll('input[type="radio"]'),r=Array.from(o).some(e=>e.checked);console.log('Group validation:',{isChecked:r}),r?e.classList.remove('error'):(e.classList.add('error'),t=!1,n=n||e)}),n&&(console.log('Scrolling to invalid group'),n.scrollIntoView({behavior:'smooth',block:'center'})),console.log('Validation result:',t),t}document.addEventListener('DOMContentLoaded',function(){console.log('DOM Content Loaded');const e=document.querySelector('form');let t=!1;e&&(console.log('Form found'),e.addEventListener('submit',function(n){console.log('Form submission attempted'),n.preventDefault(),t?(console.log('Preventing double submission'),n.preventDefault()):(console.log('Validating form'),validateCheckboxGroups()?(console.log('Form validation passed'),t=!0,e.submit()):(console.log('Form validation failed'),n.preventDefault()))}))}),$('input[name="phone"]').inputmask('+\\9\\98999999999'),
$(document).ready(function() {
    $(document).on('click', '.buy:not(.scrolltoform)', function(e) {
        e.preventDefault();
        const form = $('#myForm');
        let isValid = true;
        $('.error').removeClass('error');
        $('input[required], select[required]').each(function() {
            if (!$(this).val()) {
                $(this).addClass('error');
                isValid = false;
            }
        });
        if (!isValid || !validateCheckboxGroups()) {
            return false;
        }
        const quantity = $('.complect-variant.active .complect-info-count-data-header').text();
        const loadingSpinner = $('<div class="loading-spinner"></div>');
        $('body').append(loadingSpinner); 
        const formData = {
            type: $('input[name="type"]:checked').data('type'),
            color: $('input[name="color"]:checked').data('color'),
            pack: $('.complect-variant.active').attr('pack'),
            price: $('.complect-variant.active .complect-info-price-newprice').text().replace(/\D/g, ''),
            goods: generateGoodsDescription(),
            name: $('input[name="name"]').val(),
            phone: $('input[name="phone"]').val(),
            city: $('select[name="city"]').val(),
            quantity: quantity
        };
        $.ajax({
            url: 'send.php',
            type: 'POST',
            data: formData,
            success: function(response) {
                window.location.href = 'thanks.php';
            },
            error: function() {
                $('.loading-spinner').remove();
            }
        });
    });
});

function generateGoodsDescription() {
    return `Вид: ${$('input[name="type"]:checked').data('type')}\n` +
           `Цвет: ${$('input[name="color"]:checked').data('color')}\n` +
           `Количество: ${$('.complect-variant.active .complect-info-count-data-header').text()} - ` +
           `${$('.complect-variant.active .complect-info-price-newprice').text()}`;
}
//version-2
