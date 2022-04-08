$(function() {
  
    $('.caption').on('click', function() {
      $(this).parent().toggleClass('open');
    });
    
    $('.item').on('click', function() {
        console.log(1);
      $('.item').removeClass('selected');
      console.log($(this).parent().parent());
      $(this).addClass('selected').parent().parent().parent().removeClass('open').children('.caption').text( $(this).text() );
    });
    
    $(document).on('keyup', function(evt) {
      if ( (evt.keyCode || evt.which) === 27 ) {
        $('.dropdown').removeClass('open');
      }
    });
    
    $(document).on('click', function(evt) {
      if ( $(evt.target).closest(".caption").length === 0 ) {
        $('.dropdown').removeClass('open');
      }
    });
    
  });

  function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }
  function isVietnamesePhoneNumberValid(number) {
    return /(((\+|)84)|0)+([0-9]{9})\b/.test(number);
  }
let i = 0
const saveBtn = document.querySelector('.save')
const table = document.querySelector('table')
const remove = document.querySelector('.remove')

saveBtn.onclick = () => {
    let flag = 0
    const carName = document.querySelector('.car-name').value
    const img = document.querySelector('.img').value
    const branch = document.querySelector('.caption').innerHTML
    const price = document.querySelector('.price').value

    const person = document.querySelector('.person').value
    const number = document.querySelector('.number').value
    const email = document.querySelector('.email').value
    if( parseFloat(price) < 0 ){
        alert("Gia tien phai lon hon 0")
        flag = 1
    }  else{
        flag = 0
    }
    if(ValidateEmail(email)){
        flag = 0
    } else{
        flag = 1
    }
    if(isVietnamesePhoneNumberValid(number) && parseFloat(price) > 0){
        flag  = 0
    } else{
        alert("So dien thoai co it nhat 9 so va co +84 o dau")
        flag = 1
    }
    if(ValidateEmail(email) && isVietnamesePhoneNumberValid(number) && parseFloat(price) > 0){
        flag  = 0
    } else{
        flag = 1
    }
    if (carName == '' || branch == '' || price == '' || person == '' || number == '' || email == ''){
        alert('Cần nhập đầy đủ các trường bắt buộc')
        flag = 1
    }
    console.log(isVietnamesePhoneNumberValid(number));
    if(flag == 0){
        const html = `
            <tr>
                <td> ${i+1} </td>
                <td> 
                    <img src=" ${img} " alt="" />
                </td>
                <td> ${carName} </td>
                <td> ${branch} </td>
                <td> ${price} </td>
                <td> ${person} </td>
                <td> ${number} </td>
                <td> ${email} </td>
            </tr>
        `
        i++
        table.innerHTML += html.trim()
        const row = document.querySelectorAll('table tr')

        row.forEach(item => {
            item.onclick = () => {
                document.querySelector('.car-name').value = item.querySelector('td:nth-child(2)').innerHTML
                document.querySelector('.img').value = item.querySelector('td:nth-child(3)').src
                document.querySelector('.caption').innerHTML  =item.querySelector('td:nth-child(4)').innerHTML
                document.querySelector('.price').value  =item.querySelector('td:nth-child(5)').innerHTML

                document.querySelector('.person').value =item.querySelector('td:nth-child(6)').innerHTML
                document.querySelector('.number').value =item.querySelector('td:nth-child(7)').innerHTML
                document.querySelector('.email').value =item.querySelector('td:nth-child(8)').innerHTML

                remove.onclick = () => {
                    if(confirm("Ban co muon xoa dong nay")){
                        console.log(item);
                        item.classList.add('hide')
                        item.remove()
                    }
                }
            }
            
        })
    }
}


const str = 'abcdsfasdfasefhoaihwlknefalwnd'

const search = document.querySelector('.search')
search.oninput = (e) => {
    const row = document.querySelectorAll('table tr')

    if(e.target.value != ''){
        row.forEach(item => {
            console.log(item);
            if(item.querySelector('td:nth-child(2)').innerHTML.includes(e.target.value) || item.querySelector('td:nth-child(4)').innerHTML.includes(e.target.value) || item.querySelector('td:nth-child(5)').innerHTML.includes(e.target.value) || item.querySelector('td:nth-child(6)').innerHTML.includes(e.target.value) || item.querySelector('td:nth-child(8)').innerHTML.includes(e.target.value) || item.querySelector('td:nth-child(7)').innerHTML.includes(e.target.value)){
                item.classList.remove('hide')
            } else{
                item.classList.add('hide')
            }
        })
    }
    
}