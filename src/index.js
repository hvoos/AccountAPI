const express = require('express');

const app = express();

app.use(express.json());

const accounts = [
    {
        "Id": "82426B8A-2264-4A20-ADBC-72B7857C53FA",
        "AccountType": "Poupanca",
        "Balance": "R$588,11",
        "AccountStatus": "Active"
    },
    {
        "Id": "8DB5F3B6-3C69-139C-7665-4847D4694B4E",
        "AccountType": "Custodia",
        "Balance": "R$623,94",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6040067F-1F5A-D158-060F-BF780F80E294",
        "AccountType": "Custodia",
        "Balance": "R$252,10",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "72DCF007-355C-91EA-0F74-DC9E1CE25DC3",
        "AccountType": "Poupanca",
        "Balance": "R$898,09",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F64D7D55-31B1-2FAF-F5AB-9D97D7951D6F",
        "AccountType": "Aplicacao",
        "Balance": "R$458,52",
        "AccountStatus": "Active"
    },
    {
        "Id": "7F2B69C7-1C54-DA5F-92E9-5C2DAA2740F6",
        "AccountType": "Custodia",
        "Balance": "R$710,47",
        "AccountStatus": "Active"
    },
    {
        "Id": "0C21FFE2-9EE5-DD52-2047-AFDBF16A4DBC",
        "AccountType": "Aplicacao",
        "Balance": "R$609,33",
        "AccountStatus": "Active"
    },
    {
        "Id": "E741832F-F210-B528-A504-28D5DAFA1B04",
        "AccountType": "Conta Corrente",
        "Balance": "R$357,13",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3A3B6A0A-5A10-4B5E-3C30-32EF191792D1",
        "AccountType": "Custodia",
        "Balance": "R$798,44",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "883537EE-1FB0-4D1D-DD4B-46F257428EBA",
        "AccountType": "Conta Corrente",
        "Balance": "R$262,81",
        "AccountStatus": "Active"
    },
    {
        "Id": "539483EF-BD31-54FB-4DD3-C2E202BE8B4A",
        "AccountType": "Aplicacao",
        "Balance": "R$435,08",
        "AccountStatus": "Active"
    },
    {
        "Id": "9ADCC94A-862B-56D8-9BEF-26825E136753",
        "AccountType": "Custodia",
        "Balance": "R$754,39",
        "AccountStatus": "Active"
    },
    {
        "Id": "357E04DE-F18C-333D-AF7C-CDEC168C4511",
        "AccountType": "Aplicacao",
        "Balance": "R$209,70",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7734AD0D-B9C6-087A-60E0-16383DA4E4D6",
        "AccountType": "Aplicacao",
        "Balance": "R$664,74",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C62262C8-B304-6D7E-08FE-3CE37243274B",
        "AccountType": "Custodia",
        "Balance": "R$326,61",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F77336A4-FFEB-46A3-EA72-BB7AF5C41798",
        "AccountType": "Custodia",
        "Balance": "R$285,63",
        "AccountStatus": "Active"
    },
    {
        "Id": "D28CD4AE-1AEB-4C37-177F-EFEA0D19B241",
        "AccountType": "Conta Corrente",
        "Balance": "R$266,03",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "ABE0F976-8A43-2766-FC90-CBBCFF2CC4FF",
        "AccountType": "Custodia",
        "Balance": "R$477,40",
        "AccountStatus": "Active"
    },
    {
        "Id": "42A7FE18-0220-6AC5-ABF4-CB26CB1CCD70",
        "AccountType": "Conta Corrente",
        "Balance": "R$832,57",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E27043E5-6492-A4C9-35B4-06D88409A2FD",
        "AccountType": "Poupanca",
        "Balance": "R$869,17",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D13C863D-EFB8-B689-C289-303DE45E990C",
        "AccountType": "Custodia",
        "Balance": "R$960,04",
        "AccountStatus": "Active"
    },
    {
        "Id": "B44E27C7-34BD-4C1C-A285-90ED22FCE7CE",
        "AccountType": "Aplicacao",
        "Balance": "R$441,85",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3AF5E771-A302-82ED-77A7-058D51880726",
        "AccountType": "Conta Corrente",
        "Balance": "R$53,17",
        "AccountStatus": "Active"
    },
    {
        "Id": "FB899F90-5106-0985-E0CF-616898AA5C47",
        "AccountType": "Custodia",
        "Balance": "R$474,17",
        "AccountStatus": "Active"
    },
    {
        "Id": "A970EDE0-F566-719E-1CE3-F6EB7AAF3E90",
        "AccountType": "Poupanca",
        "Balance": "R$602,89",
        "AccountStatus": "Active"
    },
    {
        "Id": "8D6EEBBA-22B4-2A46-5AD3-C2F6906E0A1D",
        "AccountType": "Custodia",
        "Balance": "R$389,34",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1A94713A-8202-D873-D1B4-0945648A3673",
        "AccountType": "Conta Corrente",
        "Balance": "R$398,66",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1EC462F9-627D-CA74-866E-283E6509E992",
        "AccountType": "Conta Corrente",
        "Balance": "R$323,53",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "B1CBADAA-025E-A537-4CF5-FC409337EBF8",
        "AccountType": "Custodia",
        "Balance": "R$208,10",
        "AccountStatus": "Active"
    },
    {
        "Id": "77D1CBC5-9A9C-69E0-687E-F0B410B0338F",
        "AccountType": "Poupanca",
        "Balance": "R$797,92",
        "AccountStatus": "Active"
    },
    {
        "Id": "F9F44F92-A6CB-0421-05A6-0634613C305A",
        "AccountType": "Aplicacao",
        "Balance": "R$370,11",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "AC616175-9887-D1E3-9053-6E448E89622F",
        "AccountType": "Custodia",
        "Balance": "R$452,66",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F2444068-D160-5329-795A-A542DB05D535",
        "AccountType": "Aplicacao",
        "Balance": "R$700,84",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7CAF9928-8CD8-3E14-B66A-6A4FDA3FD34E",
        "AccountType": "Aplicacao",
        "Balance": "R$504,16",
        "AccountStatus": "Active"
    },
    {
        "Id": "9AE2066F-BD9A-7567-92F2-0563DCA1A466",
        "AccountType": "Poupanca",
        "Balance": "R$282,67",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1F24F89E-F063-D451-5E62-C106FF81E9C6",
        "AccountType": "Conta Corrente",
        "Balance": "R$214,23",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "660E14C0-8A76-1AAE-0658-6D444F09793C",
        "AccountType": "Poupanca",
        "Balance": "R$571,89",
        "AccountStatus": "Active"
    },
    {
        "Id": "9AB318E1-CAA0-7784-0409-FD5883B0F840",
        "AccountType": "Conta Corrente",
        "Balance": "R$750,69",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "5E8281DD-0819-621F-AF9B-AC57AE1F0B91",
        "AccountType": "Poupanca",
        "Balance": "R$570,92",
        "AccountStatus": "Active"
    },
    {
        "Id": "D276D4D6-7B83-F57E-FB46-41405A5901BD",
        "AccountType": "Poupanca",
        "Balance": "R$560,03",
        "AccountStatus": "Active"
    },
    {
        "Id": "245F214B-811B-ADB5-0C58-532F5700B178",
        "AccountType": "Conta Corrente",
        "Balance": "R$697,67",
        "AccountStatus": "Active"
    },
    {
        "Id": "9858C394-DFEE-5F83-92A7-19FA845B8C75",
        "AccountType": "Poupanca",
        "Balance": "R$218,74",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1A3677AB-609E-AD99-5DDF-93A796CB8EDF",
        "AccountType": "Poupanca",
        "Balance": "R$605,19",
        "AccountStatus": "Active"
    },
    {
        "Id": "2C62858B-D7AB-30FD-C5B5-99A97FEAC330",
        "AccountType": "Poupanca",
        "Balance": "R$697,21",
        "AccountStatus": "Active"
    },
    {
        "Id": "D23625EA-80E2-F5BE-868C-6AC2CA9141A9",
        "AccountType": "Poupanca",
        "Balance": "R$406,36",
        "AccountStatus": "Active"
    },
    {
        "Id": "929E87B1-3561-907E-A1E0-AC6070B594E3",
        "AccountType": "Custodia",
        "Balance": "R$452,00",
        "AccountStatus": "Active"
    },
    {
        "Id": "A33EBE74-52A7-FA40-6F3F-EBE04F74DB46",
        "AccountType": "Conta Corrente",
        "Balance": "R$148,83",
        "AccountStatus": "Active"
    },
    {
        "Id": "8F34DA6D-75E9-15DA-A7A6-437F400526D0",
        "AccountType": "Conta Corrente",
        "Balance": "R$555,95",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2476EBD5-D092-976D-DD84-014490905015",
        "AccountType": "Poupanca",
        "Balance": "R$275,63",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "716980EF-3949-68E3-DA3A-07FAA3C5A03A",
        "AccountType": "Custodia",
        "Balance": "R$655,56",
        "AccountStatus": "Active"
    },
    {
        "Id": "59F6D60F-823E-478A-B4F1-D62CA5E8C45C",
        "AccountType": "Custodia",
        "Balance": "R$133,39",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E7262E76-3DCD-12CC-7BDF-F28C0D72E68A",
        "AccountType": "Aplicacao",
        "Balance": "R$748,32",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7286F560-3B6E-F864-3DF3-011CD32F27D7",
        "AccountType": "Aplicacao",
        "Balance": "R$775,89",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D5F6D8DC-049C-7DE5-8652-F38D3554A45B",
        "AccountType": "Poupanca",
        "Balance": "R$984,56",
        "AccountStatus": "Active"
    },
    {
        "Id": "E88046C6-1249-F068-572F-28C0FCB203DE",
        "AccountType": "Poupanca",
        "Balance": "R$827,48",
        "AccountStatus": "Active"
    },
    {
        "Id": "43EA63CF-3C4F-1E78-DBCB-877D596764F2",
        "AccountType": "Custodia",
        "Balance": "R$546,85",
        "AccountStatus": "Active"
    },
    {
        "Id": "8FD82A60-D576-6CE2-DDE7-D25DC2287EFC",
        "AccountType": "Conta Corrente",
        "Balance": "R$398,35",
        "AccountStatus": "Active"
    },
    {
        "Id": "629362F2-1250-AFFC-80A9-0B56084A9053",
        "AccountType": "Conta Corrente",
        "Balance": "R$786,08",
        "AccountStatus": "Active"
    },
    {
        "Id": "83A86AD4-3350-6556-624D-3B05B11318B8",
        "AccountType": "Custodia",
        "Balance": "R$898,70",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "73574DE9-508E-00B7-20C6-11609AE6BD63",
        "AccountType": "Aplicacao",
        "Balance": "R$841,02",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E88B78CF-AAAE-2145-BD8B-2CD5906786A5",
        "AccountType": "Custodia",
        "Balance": "R$731,34",
        "AccountStatus": "Active"
    },
    {
        "Id": "300C5D66-5C0D-757F-7286-5165EF6F8834",
        "AccountType": "Poupanca",
        "Balance": "R$443,90",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F09D62B6-2E3C-AF6D-A7CE-A6FCAE4C06A0",
        "AccountType": "Custodia",
        "Balance": "R$506,02",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FC395653-E971-C42E-E99A-D82518E50CC1",
        "AccountType": "Conta Corrente",
        "Balance": "R$444,87",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "960A8BBD-8033-BFE5-1C8B-B879A851835B",
        "AccountType": "Custodia",
        "Balance": "R$583,01",
        "AccountStatus": "Active"
    },
    {
        "Id": "FE372189-75B1-DCC9-3552-25B66957C7B1",
        "AccountType": "Aplicacao",
        "Balance": "R$344,15",
        "AccountStatus": "Active"
    },
    {
        "Id": "601231A3-896F-EFE1-9CF8-01A9BCB8540E",
        "AccountType": "Poupanca",
        "Balance": "R$885,13",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BA5C3D9A-55AE-640C-68DE-0DE0826E1D0F",
        "AccountType": "Custodia",
        "Balance": "R$918,29",
        "AccountStatus": "Active"
    },
    {
        "Id": "7358B6C6-F169-0B7C-B456-6491191E7498",
        "AccountType": "Custodia",
        "Balance": "R$66,96",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "4EBBBD75-C046-D46D-8FD3-AD7B4F1A103A",
        "AccountType": "Conta Corrente",
        "Balance": "R$623,35",
        "AccountStatus": "Active"
    },
    {
        "Id": "34650344-3EBB-002B-C1CE-1FBBD2BD1C5C",
        "AccountType": "Aplicacao",
        "Balance": "R$287,14",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2B19E466-B09C-26C8-4578-32F33AB34EF8",
        "AccountType": "Aplicacao",
        "Balance": "R$892,81",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "39F38796-037D-12E0-811A-D1615735B65C",
        "AccountType": "Custodia",
        "Balance": "R$224,79",
        "AccountStatus": "Active"
    },
    {
        "Id": "2D958275-93CC-7833-E9B5-DCE8C6CDC33F",
        "AccountType": "Poupanca",
        "Balance": "R$458,66",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2B489013-13D4-8DC4-9ED8-337428721593",
        "AccountType": "Aplicacao",
        "Balance": "R$665,41",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "80CCDC1F-886B-DAD4-BCF1-659C85A5418A",
        "AccountType": "Conta Corrente",
        "Balance": "R$667,32",
        "AccountStatus": "Active"
    },
    {
        "Id": "B114607D-0C95-3BB1-30D5-67EBBDA55B5A",
        "AccountType": "Aplicacao",
        "Balance": "R$373,69",
        "AccountStatus": "Active"
    },
    {
        "Id": "4696373C-866D-7000-55FE-83DC643FC73F",
        "AccountType": "Aplicacao",
        "Balance": "R$406,15",
        "AccountStatus": "Active"
    },
    {
        "Id": "48A66AFC-B0F0-6A08-5961-F86E063B36BF",
        "AccountType": "Poupanca",
        "Balance": "R$455,71",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C858C5CC-256C-C34B-1015-22AF4A88D1DD",
        "AccountType": "Aplicacao",
        "Balance": "R$170,62",
        "AccountStatus": "Active"
    },
    {
        "Id": "6C9BFA52-773E-1966-871E-775CCED76EAB",
        "AccountType": "Custodia",
        "Balance": "R$923,82",
        "AccountStatus": "Active"
    },
    {
        "Id": "546B99EB-6B67-39E8-9B2A-D781942A0D91",
        "AccountType": "Custodia",
        "Balance": "R$440,63",
        "AccountStatus": "Active"
    },
    {
        "Id": "C92D551C-DB97-92EC-D0B6-54B733B3EF28",
        "AccountType": "Custodia",
        "Balance": "R$125,81",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8AF681E9-8256-A24C-E643-20A55F91DE72",
        "AccountType": "Poupanca",
        "Balance": "R$839,28",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "40823BCE-0A10-8848-073A-D08100350A3D",
        "AccountType": "Custodia",
        "Balance": "R$441,01",
        "AccountStatus": "Active"
    },
    {
        "Id": "AC17000F-D6A3-5625-8277-69295C2C314D",
        "AccountType": "Custodia",
        "Balance": "R$737,62",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8EF17E13-85E0-0A1D-4AC2-AFED265DE21F",
        "AccountType": "Custodia",
        "Balance": "R$783,44",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2C6BA2D1-D7AA-DB69-50BA-07E67304C02A",
        "AccountType": "Poupanca",
        "Balance": "R$88,93",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "937E9EB1-04AC-1E88-416E-0CC32E27B6BA",
        "AccountType": "Aplicacao",
        "Balance": "R$80,52",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8F28BC25-A3E4-E8E1-874E-3655DD0F97C8",
        "AccountType": "Conta Corrente",
        "Balance": "R$530,89",
        "AccountStatus": "Active"
    },
    {
        "Id": "4994352C-A858-383C-84D3-BA9420638AAD",
        "AccountType": "Poupanca",
        "Balance": "R$500,44",
        "AccountStatus": "Active"
    },
    {
        "Id": "5D2B962E-7963-A1BF-A920-2F1B0DF6C4E3",
        "AccountType": "Aplicacao",
        "Balance": "R$712,45",
        "AccountStatus": "Active"
    },
    {
        "Id": "B7907066-CE1C-2ED6-142B-CC11B5B072F3",
        "AccountType": "Aplicacao",
        "Balance": "R$958,35",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "DFF94470-2914-DF72-2C7E-2E61E168AF7A",
        "AccountType": "Custodia",
        "Balance": "R$155,99",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6C5BEE71-701F-5DDA-3490-6B9B769C8DF2",
        "AccountType": "Aplicacao",
        "Balance": "R$485,84",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "CD60E7D9-D047-2C97-A2B9-E75C80BCE70E",
        "AccountType": "Conta Corrente",
        "Balance": "R$417,81",
        "AccountStatus": "Active"
    },
    {
        "Id": "DEABA0B6-DF62-C72A-2B2B-2264AE139028",
        "AccountType": "Poupanca",
        "Balance": "R$607,55",
        "AccountStatus": "Active"
    },
    {
        "Id": "9A64FA1A-0E99-FDC8-5607-0B2AE5BFC897",
        "AccountType": "Aplicacao",
        "Balance": "R$407,81",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "376DEE3B-D3D9-130B-3367-88F1FE728BFB",
        "AccountType": "Poupanca",
        "Balance": "R$733,22",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "5F933D8A-1E7E-3E6E-8072-C4C60C89E7A6",
        "AccountType": "Aplicacao",
        "Balance": "R$656,74",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "AD40010B-253C-FE24-6E62-B44F1F059128",
        "AccountType": "Aplicacao",
        "Balance": "R$854,05",
        "AccountStatus": "Active"
    },
    {
        "Id": "4191E019-144B-1E58-C609-44B7BCC30449",
        "AccountType": "Poupanca",
        "Balance": "R$145,67",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "242F409C-1901-1DE4-5C39-18984AF625FB",
        "AccountType": "Custodia",
        "Balance": "R$522,50",
        "AccountStatus": "Active"
    },
    {
        "Id": "D2FB10EF-7FC5-AEAA-CB6D-2CF355133241",
        "AccountType": "Conta Corrente",
        "Balance": "R$785,82",
        "AccountStatus": "Active"
    },
    {
        "Id": "E7D9BDFA-C268-0855-3A92-12EAA8961483",
        "AccountType": "Poupanca",
        "Balance": "R$892,53",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2F7C2D36-9B94-FF8F-3277-4DFA194D87ED",
        "AccountType": "Custodia",
        "Balance": "R$595,71",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7F4D79C5-2E42-A15B-3E15-6BFBB30D1863",
        "AccountType": "Aplicacao",
        "Balance": "R$794,62",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6FBD4046-69B4-50E3-0458-51F5D9534DEC",
        "AccountType": "Conta Corrente",
        "Balance": "R$978,41",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E2C2C20B-AF92-2321-5D5E-677D82075A18",
        "AccountType": "Conta Corrente",
        "Balance": "R$829,11",
        "AccountStatus": "Active"
    },
    {
        "Id": "F11B6592-7213-5A99-AA9C-63CEF5982380",
        "AccountType": "Poupanca",
        "Balance": "R$291,14",
        "AccountStatus": "Active"
    },
    {
        "Id": "DFDFD10B-558A-93E4-B5B4-0B1D20213E2A",
        "AccountType": "Aplicacao",
        "Balance": "R$424,64",
        "AccountStatus": "Active"
    },
    {
        "Id": "AC359E57-FC37-AB99-3DE5-488EF29DF4D1",
        "AccountType": "Custodia",
        "Balance": "R$293,96",
        "AccountStatus": "Active"
    },
    {
        "Id": "AC0E1453-FB3C-8949-A8C2-577602F28ADF",
        "AccountType": "Aplicacao",
        "Balance": "R$717,55",
        "AccountStatus": "Active"
    },
    {
        "Id": "FFC2EE37-E1E6-51D1-5477-277F125B6512",
        "AccountType": "Poupanca",
        "Balance": "R$669,03",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BD14C545-E108-6BC2-C23B-A7BA43851BC8",
        "AccountType": "Custodia",
        "Balance": "R$151,48",
        "AccountStatus": "Active"
    },
    {
        "Id": "2A3BDE56-EF58-7C8F-09ED-AE7E4609CCB2",
        "AccountType": "Conta Corrente",
        "Balance": "R$224,57",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1302BFFE-F94D-BD0A-F9D5-7167576695D9",
        "AccountType": "Conta Corrente",
        "Balance": "R$227,83",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9FC1EC7F-CFDC-D4CE-D0DF-5CE54CAB5EC8",
        "AccountType": "Aplicacao",
        "Balance": "R$665,94",
        "AccountStatus": "Active"
    },
    {
        "Id": "97C26B7A-C239-434C-BB25-0695742F3351",
        "AccountType": "Aplicacao",
        "Balance": "R$692,33",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "AA7615FB-9754-7D86-CE3D-194085EF1255",
        "AccountType": "Aplicacao",
        "Balance": "R$102,42",
        "AccountStatus": "Active"
    },
    {
        "Id": "4DBC6388-2FB2-C97C-120C-71C07043BA37",
        "AccountType": "Custodia",
        "Balance": "R$404,66",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "463274C7-04C9-0DEE-B388-8C5313D7E8E2",
        "AccountType": "Conta Corrente",
        "Balance": "R$719,63",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "0388215E-BE47-6A55-A884-2D5B4F12CBF9",
        "AccountType": "Aplicacao",
        "Balance": "R$122,52",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8A6B2B73-27A1-49B0-E134-D34ED18235A3",
        "AccountType": "Aplicacao",
        "Balance": "R$886,43",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "CA2BF066-62FC-3862-29A9-79FBCB7551E9",
        "AccountType": "Aplicacao",
        "Balance": "R$170,56",
        "AccountStatus": "Active"
    },
    {
        "Id": "2058E13F-213A-468C-1F90-DDB0AB17159D",
        "AccountType": "Poupanca",
        "Balance": "R$979,10",
        "AccountStatus": "Active"
    },
    {
        "Id": "E191A59D-3B40-96B4-5647-57F8AACBD45E",
        "AccountType": "Aplicacao",
        "Balance": "R$603,73",
        "AccountStatus": "Active"
    },
    {
        "Id": "1D8B8E09-C48E-0350-1371-64FF1D048CCF",
        "AccountType": "Poupanca",
        "Balance": "R$862,34",
        "AccountStatus": "Active"
    },
    {
        "Id": "BE9980EE-F8BA-879B-E21F-FE08884C4A6D",
        "AccountType": "Conta Corrente",
        "Balance": "R$166,09",
        "AccountStatus": "Active"
    },
    {
        "Id": "CEFA795B-1F29-86E0-5682-69D9C6684F6A",
        "AccountType": "Custodia",
        "Balance": "R$224,08",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3C4F63B0-C360-11CD-CB36-F1AF6C013863",
        "AccountType": "Custodia",
        "Balance": "R$157,12",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "161FAC1A-7A56-E0C9-A330-5B034E3C93E7",
        "AccountType": "Conta Corrente",
        "Balance": "R$100,22",
        "AccountStatus": "Active"
    },
    {
        "Id": "DA359FC9-CA32-E15E-41FA-1D4BBD97EF67",
        "AccountType": "Poupanca",
        "Balance": "R$970,42",
        "AccountStatus": "Active"
    },
    {
        "Id": "C3A1C125-37FC-11D4-50EE-2B5AE5D46D39",
        "AccountType": "Aplicacao",
        "Balance": "R$775,43",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "580F14C8-D0C8-7D53-DDFA-58A2D651776A",
        "AccountType": "Poupanca",
        "Balance": "R$529,64",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "35F3A260-D4E7-911D-74E6-86FF4AC659D7",
        "AccountType": "Poupanca",
        "Balance": "R$132,81",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1DA37F0C-77C0-0D35-173F-04ECEAF4E9C5",
        "AccountType": "Conta Corrente",
        "Balance": "R$190,69",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1703E667-FA29-E4AF-FF73-DE6EFFD932CF",
        "AccountType": "Conta Corrente",
        "Balance": "R$366,62",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "EA6AE182-4F2C-05FD-927F-8114D69C2B2B",
        "AccountType": "Poupanca",
        "Balance": "R$894,88",
        "AccountStatus": "Active"
    },
    {
        "Id": "948C1DB5-EF78-5D23-B97E-874BE6A47882",
        "AccountType": "Poupanca",
        "Balance": "R$285,10",
        "AccountStatus": "Active"
    },
    {
        "Id": "85B12176-7145-4129-6ED5-2A1EA872E4AE",
        "AccountType": "Conta Corrente",
        "Balance": "R$770,74",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "5934020D-698D-315E-867D-3993A6B0A9D5",
        "AccountType": "Poupanca",
        "Balance": "R$748,91",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "EDB20B2E-1044-53D9-C538-F54FD5074138",
        "AccountType": "Custodia",
        "Balance": "R$261,54",
        "AccountStatus": "Active"
    },
    {
        "Id": "706638AB-A7C2-AD99-C3AE-7F94BEEADBDB",
        "AccountType": "Aplicacao",
        "Balance": "R$786,54",
        "AccountStatus": "Active"
    },
    {
        "Id": "36D2F131-84A6-BC3E-05D0-8A391AF2E590",
        "AccountType": "Custodia",
        "Balance": "R$573,43",
        "AccountStatus": "Active"
    },
    {
        "Id": "8DCD7F0F-41FA-2083-A75C-B3F59053A069",
        "AccountType": "Custodia",
        "Balance": "R$959,87",
        "AccountStatus": "Active"
    },
    {
        "Id": "BA18FD35-D72E-3ADD-4BC4-1645B08AA8B2",
        "AccountType": "Conta Corrente",
        "Balance": "R$749,63",
        "AccountStatus": "Active"
    },
    {
        "Id": "4BEE00C2-50E6-8CD0-9662-459D455FFCBC",
        "AccountType": "Aplicacao",
        "Balance": "R$391,42",
        "AccountStatus": "Active"
    },
    {
        "Id": "A59CA3F9-2910-C933-3412-E7BBDE49FC4E",
        "AccountType": "Custodia",
        "Balance": "R$527,39",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "77C4D178-3913-28CA-530E-9B39435A4403",
        "AccountType": "Conta Corrente",
        "Balance": "R$915,34",
        "AccountStatus": "Active"
    },
    {
        "Id": "84400D39-75C2-5381-596D-923B68694ED5",
        "AccountType": "Custodia",
        "Balance": "R$787,49",
        "AccountStatus": "Active"
    },
    {
        "Id": "7E404DC4-2118-FDBA-B620-5AD8D96E3099",
        "AccountType": "Poupanca",
        "Balance": "R$52,09",
        "AccountStatus": "Active"
    },
    {
        "Id": "2F26D8F0-7380-51EE-CB5D-C0524C821D97",
        "AccountType": "Aplicacao",
        "Balance": "R$87,14",
        "AccountStatus": "Active"
    },
    {
        "Id": "79D57D5A-0012-AE24-53B3-FDF638AA2F6F",
        "AccountType": "Aplicacao",
        "Balance": "R$426,09",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D034C503-7333-DC6E-FBFE-B106EA56B030",
        "AccountType": "Conta Corrente",
        "Balance": "R$394,34",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "04E69BAF-27BD-A1FA-A4F8-F1715439E737",
        "AccountType": "Custodia",
        "Balance": "R$801,56",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "41EC3FD4-87D4-0751-6E01-EFEBBD56A246",
        "AccountType": "Poupanca",
        "Balance": "R$117,35",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2AEDFD50-5428-63BF-9755-AFCA26AA3AA0",
        "AccountType": "Custodia",
        "Balance": "R$814,87",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "94100ED0-9C2C-5C91-242F-3A47049C015E",
        "AccountType": "Conta Corrente",
        "Balance": "R$340,39",
        "AccountStatus": "Active"
    },
    {
        "Id": "63C79F24-1DAC-95F3-62D3-D233EF59868A",
        "AccountType": "Conta Corrente",
        "Balance": "R$311,83",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "ECA1E6B4-B9C3-7348-5335-5690BCCAC41C",
        "AccountType": "Poupanca",
        "Balance": "R$215,89",
        "AccountStatus": "Active"
    },
    {
        "Id": "AC5BFC94-D0BE-0666-252B-274BB7049A63",
        "AccountType": "Custodia",
        "Balance": "R$166,69",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "B8DDE736-EAD5-77EC-22B5-FD15725BB355",
        "AccountType": "Custodia",
        "Balance": "R$440,43",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "5063A004-80A9-A818-F78B-8520714AB4BB",
        "AccountType": "Aplicacao",
        "Balance": "R$657,18",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "92D75C71-4AC5-8956-45D7-562543FFFE1C",
        "AccountType": "Custodia",
        "Balance": "R$76,34",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "AB99D266-BD6B-355E-CECD-5AC99FF1FE9A",
        "AccountType": "Poupanca",
        "Balance": "R$85,55",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9E6213BB-057D-8118-EB54-E089C12D40AC",
        "AccountType": "Poupanca",
        "Balance": "R$108,97",
        "AccountStatus": "Active"
    },
    {
        "Id": "746680FD-2485-2651-912D-C8E0E053EB5C",
        "AccountType": "Aplicacao",
        "Balance": "R$788,00",
        "AccountStatus": "Active"
    },
    {
        "Id": "2F61993F-3B51-EB31-1DD5-042C4C4241B3",
        "AccountType": "Custodia",
        "Balance": "R$285,60",
        "AccountStatus": "Active"
    },
    {
        "Id": "191AC757-41F4-090D-D9F2-2345B5B78CCD",
        "AccountType": "Aplicacao",
        "Balance": "R$275,73",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "5DAF164C-2095-1559-4BAB-400DB542856D",
        "AccountType": "Custodia",
        "Balance": "R$556,02",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "535A3F6E-8F49-E8F3-5071-AA0DADD44570",
        "AccountType": "Aplicacao",
        "Balance": "R$272,64",
        "AccountStatus": "Active"
    },
    {
        "Id": "D1D159C2-4485-1211-94BD-62338590A5FC",
        "AccountType": "Poupanca",
        "Balance": "R$446,56",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "B616C374-5821-BCF2-AA69-78EE09DA5545",
        "AccountType": "Poupanca",
        "Balance": "R$397,97",
        "AccountStatus": "Active"
    },
    {
        "Id": "8B166B9B-A0CD-9CF8-E9D7-C7F6F21D2EB0",
        "AccountType": "Conta Corrente",
        "Balance": "R$718,29",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "18051683-B743-2780-29F7-934AD6D1AEA7",
        "AccountType": "Conta Corrente",
        "Balance": "R$476,07",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "163C9F6F-9FF9-B901-E132-A0B4741E2BE6",
        "AccountType": "Aplicacao",
        "Balance": "R$835,16",
        "AccountStatus": "Active"
    },
    {
        "Id": "EC6C1FF0-CB6D-835A-0C6E-EEFDCA156453",
        "AccountType": "Aplicacao",
        "Balance": "R$742,77",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "CA9CF869-35A0-CB56-7603-BC9C6203C641",
        "AccountType": "Custodia",
        "Balance": "R$85,16",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "DCD8742A-355F-B809-95A3-77744342BFC5",
        "AccountType": "Aplicacao",
        "Balance": "R$218,81",
        "AccountStatus": "Active"
    },
    {
        "Id": "5CF4091D-4F1E-FF2A-DD69-322AFADBE519",
        "AccountType": "Poupanca",
        "Balance": "R$928,85",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "28AFFA43-F9F0-85A3-6606-F46116F16207",
        "AccountType": "Conta Corrente",
        "Balance": "R$212,30",
        "AccountStatus": "Active"
    },
    {
        "Id": "4B51D586-E9AC-5806-035F-D4D3B80DCC12",
        "AccountType": "Aplicacao",
        "Balance": "R$90,38",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6A6E1D8B-D63C-D61F-6DAC-28334AE8E552",
        "AccountType": "Poupanca",
        "Balance": "R$129,42",
        "AccountStatus": "Active"
    },
    {
        "Id": "18E7F46F-15F6-FFA8-630D-79D425217424",
        "AccountType": "Conta Corrente",
        "Balance": "R$59,37",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "DFBF0287-F07B-BFAB-ED63-443ADAB13D1D",
        "AccountType": "Custodia",
        "Balance": "R$417,85",
        "AccountStatus": "Active"
    },
    {
        "Id": "1E58EA8C-42D3-57DA-391F-46007DFB72A0",
        "AccountType": "Aplicacao",
        "Balance": "R$768,64",
        "AccountStatus": "Active"
    },
    {
        "Id": "52B51A02-32C6-D64D-FAFE-C4E53E4E9626",
        "AccountType": "Custodia",
        "Balance": "R$114,20",
        "AccountStatus": "Active"
    },
    {
        "Id": "E2ECF70E-8198-5DEC-1190-375102EBA68B",
        "AccountType": "Conta Corrente",
        "Balance": "R$902,35",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "0916D8C1-2F32-AD5C-BDA3-CAB208B302DF",
        "AccountType": "Conta Corrente",
        "Balance": "R$658,50",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "CD30E901-6C45-40F6-2956-4291EC3BB33F",
        "AccountType": "Custodia",
        "Balance": "R$647,96",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2014E177-BEA2-FAB0-C82B-E8B68FE060FE",
        "AccountType": "Conta Corrente",
        "Balance": "R$862,32",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6E9930B8-108C-6294-B244-BD2E105BC76B",
        "AccountType": "Custodia",
        "Balance": "R$748,70",
        "AccountStatus": "Active"
    },
    {
        "Id": "81FC1916-CBF8-0892-5BE3-10A9409B3362",
        "AccountType": "Conta Corrente",
        "Balance": "R$354,58",
        "AccountStatus": "Active"
    },
    {
        "Id": "A1AA9D7C-BE6B-8F7D-CC7D-A451AAD3B0A9",
        "AccountType": "Conta Corrente",
        "Balance": "R$425,64",
        "AccountStatus": "Active"
    },
    {
        "Id": "F6F7AC0C-472A-904D-AAE4-3A10975759E2",
        "AccountType": "Poupanca",
        "Balance": "R$701,34",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "CC308C4A-CC01-080D-0A83-24BD5E1CB382",
        "AccountType": "Custodia",
        "Balance": "R$611,91",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "81AFC141-E7A7-6066-8A89-E6E9B2238F9F",
        "AccountType": "Poupanca",
        "Balance": "R$855,69",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3D83878D-A08D-84C8-1D4B-E25AFED580EE",
        "AccountType": "Custodia",
        "Balance": "R$536,71",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E53EE1C6-6F2C-5F71-C0E8-155658190957",
        "AccountType": "Aplicacao",
        "Balance": "R$566,77",
        "AccountStatus": "Active"
    },
    {
        "Id": "8C226DE3-E1FF-AE35-E9BF-730A935417FF",
        "AccountType": "Conta Corrente",
        "Balance": "R$939,04",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FE4E42F1-4366-55CC-8D90-DB94CA7BF769",
        "AccountType": "Aplicacao",
        "Balance": "R$984,34",
        "AccountStatus": "Active"
    },
    {
        "Id": "4EA10A05-FB00-4CFC-87F5-079D40B9E2B5",
        "AccountType": "Conta Corrente",
        "Balance": "R$933,79",
        "AccountStatus": "Active"
    },
    {
        "Id": "66F02CFD-451D-E072-C454-44E6B6577411",
        "AccountType": "Aplicacao",
        "Balance": "R$271,07",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A6FE8DA5-7CCF-3CD1-B3AF-9D3FB0577A51",
        "AccountType": "Custodia",
        "Balance": "R$683,22",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "876EAFE1-5E59-862C-D562-BFA8906590D6",
        "AccountType": "Aplicacao",
        "Balance": "R$567,00",
        "AccountStatus": "Active"
    },
    {
        "Id": "C74BB74E-EEA6-1623-A61A-E2CF542EDB25",
        "AccountType": "Custodia",
        "Balance": "R$150,83",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "252E5D63-8EB5-9AC2-20A3-68549B7A916E",
        "AccountType": "Conta Corrente",
        "Balance": "R$355,39",
        "AccountStatus": "Active"
    },
    {
        "Id": "9F17236C-876A-2B71-C28F-393EE63FC282",
        "AccountType": "Poupanca",
        "Balance": "R$389,53",
        "AccountStatus": "Active"
    },
    {
        "Id": "D0F223B5-12B8-BBE5-9C68-AF33E6FF7293",
        "AccountType": "Conta Corrente",
        "Balance": "R$251,19",
        "AccountStatus": "Active"
    },
    {
        "Id": "E900CD15-7F61-9FFB-291B-850B9485834D",
        "AccountType": "Poupanca",
        "Balance": "R$991,83",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "4835378C-98F3-00F5-3AFF-D72EB99DB747",
        "AccountType": "Poupanca",
        "Balance": "R$687,81",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F15F7236-2297-35EE-D53C-B8A3E5F5334F",
        "AccountType": "Aplicacao",
        "Balance": "R$339,20",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2731208D-08F5-8139-F731-01C3EA30857C",
        "AccountType": "Poupanca",
        "Balance": "R$966,44",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "79DDBF02-F10E-1AD2-EB00-AC0223E0FE6B",
        "AccountType": "Aplicacao",
        "Balance": "R$209,55",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "26740490-8E39-B577-6173-6B7735F37CDC",
        "AccountType": "Aplicacao",
        "Balance": "R$917,53",
        "AccountStatus": "Active"
    },
    {
        "Id": "FC20C3F5-1E07-9D91-FF8A-0BD089DD4ED8",
        "AccountType": "Aplicacao",
        "Balance": "R$580,38",
        "AccountStatus": "Active"
    },
    {
        "Id": "926DF343-D434-93F5-80F3-41BD3E366DD6",
        "AccountType": "Conta Corrente",
        "Balance": "R$568,99",
        "AccountStatus": "Active"
    },
    {
        "Id": "239259F7-8E30-D147-42F1-D9B9DC5F7590",
        "AccountType": "Conta Corrente",
        "Balance": "R$935,42",
        "AccountStatus": "Active"
    },
    {
        "Id": "E9574D16-BB92-8D2D-3451-7185CDA8086A",
        "AccountType": "Poupanca",
        "Balance": "R$733,32",
        "AccountStatus": "Active"
    },
    {
        "Id": "96191A5D-2CE1-1409-7D00-2307745F5581",
        "AccountType": "Custodia",
        "Balance": "R$291,19",
        "AccountStatus": "Active"
    },
    {
        "Id": "37C8BCC7-7A46-29BE-5FFF-B3378A6412FE",
        "AccountType": "Custodia",
        "Balance": "R$349,09",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F0C764BF-F166-6F0B-C6C5-490CC7E502A8",
        "AccountType": "Poupanca",
        "Balance": "R$803,29",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A72031F6-1298-0E8B-B8A1-69F94A62B631",
        "AccountType": "Poupanca",
        "Balance": "R$264,14",
        "AccountStatus": "Active"
    },
    {
        "Id": "D6880048-F981-A393-B39D-86C6CC4B252F",
        "AccountType": "Aplicacao",
        "Balance": "R$688,89",
        "AccountStatus": "Active"
    },
    {
        "Id": "2FACEDB1-B152-4EFE-30C5-06C6CFDABB05",
        "AccountType": "Custodia",
        "Balance": "R$796,42",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "76DBBBCB-E0BC-3D7A-0F42-A3991238676F",
        "AccountType": "Custodia",
        "Balance": "R$122,36",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "209585CE-9140-587F-A1F6-BF1689019942",
        "AccountType": "Poupanca",
        "Balance": "R$832,75",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E09C2153-8712-E21A-AEE8-8421DF16726F",
        "AccountType": "Custodia",
        "Balance": "R$293,83",
        "AccountStatus": "Active"
    },
    {
        "Id": "A2042054-30AC-A66A-D0DC-A59EDB960FD7",
        "AccountType": "Poupanca",
        "Balance": "R$817,79",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "AEF56977-2840-D952-3A78-436FF616E630",
        "AccountType": "Aplicacao",
        "Balance": "R$385,93",
        "AccountStatus": "Active"
    },
    {
        "Id": "A722C348-0C66-D7E7-F0F8-2DFDE1030144",
        "AccountType": "Poupanca",
        "Balance": "R$878,98",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "84CE4B42-E3E8-D8FF-2BAD-2DF288E162D1",
        "AccountType": "Aplicacao",
        "Balance": "R$919,29",
        "AccountStatus": "Active"
    },
    {
        "Id": "CEBFC1B6-B219-0673-F236-225B61E19855",
        "AccountType": "Conta Corrente",
        "Balance": "R$855,79",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "51A2DFF3-5BBF-3448-4E90-874FF5D6136D",
        "AccountType": "Poupanca",
        "Balance": "R$550,68",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3C56E433-F766-56EE-085D-40807E14211A",
        "AccountType": "Conta Corrente",
        "Balance": "R$478,13",
        "AccountStatus": "Active"
    },
    {
        "Id": "530D7C9A-558B-D612-DE29-DC5B5462FEFB",
        "AccountType": "Aplicacao",
        "Balance": "R$89,11",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7F061706-E5B0-F7D3-A469-CF5696387479",
        "AccountType": "Custodia",
        "Balance": "R$817,39",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BFB7A7DD-5494-0888-9467-8CBEAB5A1977",
        "AccountType": "Aplicacao",
        "Balance": "R$941,40",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D105C82E-C2CF-52FE-70A8-13011775D3B6",
        "AccountType": "Conta Corrente",
        "Balance": "R$397,68",
        "AccountStatus": "Active"
    },
    {
        "Id": "D1C91793-B6F5-5B5B-D208-1280A4C47AE7",
        "AccountType": "Aplicacao",
        "Balance": "R$754,45",
        "AccountStatus": "Active"
    },
    {
        "Id": "9DC9533D-D9A3-1501-3D0C-B350AED8472B",
        "AccountType": "Aplicacao",
        "Balance": "R$648,16",
        "AccountStatus": "Active"
    },
    {
        "Id": "F77BAEC9-4098-9F1B-77C7-BC29EEA82F5F",
        "AccountType": "Aplicacao",
        "Balance": "R$743,56",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E0D345D4-6F8F-A33B-31B3-5DCA5E4108EB",
        "AccountType": "Conta Corrente",
        "Balance": "R$568,79",
        "AccountStatus": "Active"
    },
    {
        "Id": "3B7141A5-91C4-7DDB-DF9B-13D5E59287FC",
        "AccountType": "Conta Corrente",
        "Balance": "R$443,24",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "14CC8742-389B-211E-6298-105E98E2DEE6",
        "AccountType": "Poupanca",
        "Balance": "R$63,33",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C00D60ED-2B59-FFD5-44C6-46B938C8FAF5",
        "AccountType": "Poupanca",
        "Balance": "R$643,34",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "48E95751-1642-4292-2BDF-328F731F296C",
        "AccountType": "Poupanca",
        "Balance": "R$470,84",
        "AccountStatus": "Active"
    },
    {
        "Id": "E5C39416-451D-DD66-C6C4-8C69411975CD",
        "AccountType": "Custodia",
        "Balance": "R$339,07",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FCDF7197-03C7-68D7-94E0-75538B92FA2D",
        "AccountType": "Aplicacao",
        "Balance": "R$575,38",
        "AccountStatus": "Active"
    },
    {
        "Id": "A36245B9-EFBA-C3BE-A27C-F326EEE690D8",
        "AccountType": "Conta Corrente",
        "Balance": "R$112,23",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FC272F01-E22E-017B-3178-5F6F6A4F0EA1",
        "AccountType": "Aplicacao",
        "Balance": "R$917,56",
        "AccountStatus": "Active"
    },
    {
        "Id": "51CA629F-209E-0FF0-5D03-EEBA8DC79A26",
        "AccountType": "Custodia",
        "Balance": "R$493,46",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C9D3D3C6-C868-1F34-95E7-3D6964E81719",
        "AccountType": "Aplicacao",
        "Balance": "R$492,44",
        "AccountStatus": "Active"
    },
    {
        "Id": "BD598DDE-9124-C259-2698-4285EDC20647",
        "AccountType": "Custodia",
        "Balance": "R$53,08",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1819C6BB-6EC8-489E-5D8D-79B193156885",
        "AccountType": "Aplicacao",
        "Balance": "R$989,40",
        "AccountStatus": "Active"
    },
    {
        "Id": "C06E97A5-30D0-14AF-DC80-24FB6B7BE6D7",
        "AccountType": "Poupanca",
        "Balance": "R$813,81",
        "AccountStatus": "Active"
    },
    {
        "Id": "5AC7E40F-003F-9D20-121C-4E433B792A52",
        "AccountType": "Aplicacao",
        "Balance": "R$503,53",
        "AccountStatus": "Active"
    },
    {
        "Id": "38794942-E538-2877-060D-C93B54F0A7B0",
        "AccountType": "Aplicacao",
        "Balance": "R$501,25",
        "AccountStatus": "Active"
    },
    {
        "Id": "E89DA746-B48B-D6A7-5CD6-B2A77C762D0B",
        "AccountType": "Aplicacao",
        "Balance": "R$106,72",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A67DC255-1E16-32C7-1069-534E0CC96E9C",
        "AccountType": "Aplicacao",
        "Balance": "R$826,21",
        "AccountStatus": "Active"
    },
    {
        "Id": "DE91901C-A877-E8CA-F93E-72C6D6AAD14C",
        "AccountType": "Aplicacao",
        "Balance": "R$922,51",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FE564C74-0846-B4F7-542F-4BE5C09BDA8C",
        "AccountType": "Aplicacao",
        "Balance": "R$326,34",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "88B664D1-3404-9F2D-6E98-22A60A0122DB",
        "AccountType": "Custodia",
        "Balance": "R$973,82",
        "AccountStatus": "Active"
    },
    {
        "Id": "B582CE17-4EF9-96B2-0981-C605E4D96E80",
        "AccountType": "Custodia",
        "Balance": "R$842,88",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9FD903AD-1627-F71E-37E7-E053DEA1BB9D",
        "AccountType": "Poupanca",
        "Balance": "R$433,25",
        "AccountStatus": "Active"
    },
    {
        "Id": "768860DB-245A-1066-6AFF-5BDABE529A42",
        "AccountType": "Poupanca",
        "Balance": "R$928,97",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "04A04D36-83AF-2B04-99D9-052791D09ED1",
        "AccountType": "Poupanca",
        "Balance": "R$234,06",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "94D5FC82-B64C-5631-6C35-4C52309E1E0C",
        "AccountType": "Poupanca",
        "Balance": "R$435,56",
        "AccountStatus": "Active"
    },
    {
        "Id": "344E1AE1-3EA9-3271-C87C-0C36C4BF598A",
        "AccountType": "Conta Corrente",
        "Balance": "R$743,90",
        "AccountStatus": "Active"
    },
    {
        "Id": "974C6028-B290-597E-F86A-1E41A6931D51",
        "AccountType": "Aplicacao",
        "Balance": "R$311,71",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7A849717-7EEE-D3E1-49BD-928EBF14677B",
        "AccountType": "Custodia",
        "Balance": "R$988,40",
        "AccountStatus": "Active"
    },
    {
        "Id": "25DB954B-165D-2443-798E-D024AE5F0D9B",
        "AccountType": "Custodia",
        "Balance": "R$900,99",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E0BC5169-4ADC-DBFE-FBA2-148CF33653BE",
        "AccountType": "Poupanca",
        "Balance": "R$126,42",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "53BAF3A0-64CB-463C-3190-CCE7D062D965",
        "AccountType": "Poupanca",
        "Balance": "R$498,20",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8F906B17-2CE8-1813-7095-5E10C8227828",
        "AccountType": "Aplicacao",
        "Balance": "R$563,45",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FFA7CCE4-1672-9DB2-9589-62117DEF8984",
        "AccountType": "Conta Corrente",
        "Balance": "R$541,88",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "0179B7C5-9B80-F0A2-F255-A9DAA2A81969",
        "AccountType": "Custodia",
        "Balance": "R$654,97",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A1DD0C9F-3BAE-9E84-1DBD-0E3F64E4A4F0",
        "AccountType": "Aplicacao",
        "Balance": "R$374,33",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "918E6BA5-4DEA-D597-20B0-2BB47DE6F779",
        "AccountType": "Custodia",
        "Balance": "R$97,09",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "4A7C3FA8-1C10-0E8C-DE77-5E12C04D35C2",
        "AccountType": "Custodia",
        "Balance": "R$581,75",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A46057FC-DB55-7E5E-6E44-F7E615626899",
        "AccountType": "Conta Corrente",
        "Balance": "R$374,64",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2C31B9D8-DC0C-F4A6-E47E-6ABE7FC0A5B3",
        "AccountType": "Aplicacao",
        "Balance": "R$74,03",
        "AccountStatus": "Active"
    },
    {
        "Id": "2160F44F-8040-F557-E312-CFCF51C95278",
        "AccountType": "Conta Corrente",
        "Balance": "R$684,39",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D363C77E-B47F-7DDB-9CED-7C99A57D4568",
        "AccountType": "Custodia",
        "Balance": "R$101,66",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9168AE2E-7D82-001E-645C-F9BF3420AAE7",
        "AccountType": "Poupanca",
        "Balance": "R$457,92",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "53232FB7-7ED9-7445-A363-F76179852AFC",
        "AccountType": "Conta Corrente",
        "Balance": "R$66,57",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6A25E285-5BD8-3EF2-3760-7F8819A5ABB6",
        "AccountType": "Custodia",
        "Balance": "R$403,54",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8C9F2979-9579-7D4E-106F-364F4A4AB677",
        "AccountType": "Aplicacao",
        "Balance": "R$361,16",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "162E2FFE-D297-4DAF-B157-309CCCC473DF",
        "AccountType": "Aplicacao",
        "Balance": "R$553,38",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "704DCE2B-40A9-1D11-65DC-A28558C0EAF9",
        "AccountType": "Custodia",
        "Balance": "R$909,13",
        "AccountStatus": "Active"
    },
    {
        "Id": "19CFD360-6F30-C2A8-79BA-03246DAAEDAF",
        "AccountType": "Aplicacao",
        "Balance": "R$558,18",
        "AccountStatus": "Active"
    },
    {
        "Id": "524DC350-D8EA-EF79-152C-006682A89CEF",
        "AccountType": "Conta Corrente",
        "Balance": "R$610,60",
        "AccountStatus": "Active"
    },
    {
        "Id": "CD151913-CCBE-84BA-2E4F-11E0ED092825",
        "AccountType": "Poupanca",
        "Balance": "R$430,82",
        "AccountStatus": "Active"
    },
    {
        "Id": "4BB747CA-0FF3-7A25-6AAE-F9B70FCAFEBE",
        "AccountType": "Conta Corrente",
        "Balance": "R$830,87",
        "AccountStatus": "Active"
    },
    {
        "Id": "CC7088DF-48BD-4DEA-13C1-38A4CDA41C54",
        "AccountType": "Poupanca",
        "Balance": "R$616,96",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "CD280925-1310-2297-9577-D976A2C2C120",
        "AccountType": "Aplicacao",
        "Balance": "R$405,47",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BFE2BFFA-DCC2-A971-8193-156872447905",
        "AccountType": "Poupanca",
        "Balance": "R$498,71",
        "AccountStatus": "Active"
    },
    {
        "Id": "50CDEB92-F92D-1FA8-044F-892BAA39B514",
        "AccountType": "Poupanca",
        "Balance": "R$669,27",
        "AccountStatus": "Active"
    },
    {
        "Id": "468D0222-3D64-ABB1-998B-E85B6C4FAC19",
        "AccountType": "Conta Corrente",
        "Balance": "R$512,59",
        "AccountStatus": "Active"
    },
    {
        "Id": "01B836FF-986A-6318-8086-C596B7BDAF87",
        "AccountType": "Conta Corrente",
        "Balance": "R$293,49",
        "AccountStatus": "Active"
    },
    {
        "Id": "E50E8BF4-AD87-E800-40DD-6BA50B28C355",
        "AccountType": "Custodia",
        "Balance": "R$625,36",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F49299B1-62D4-1A57-8193-8164F7909DF2",
        "AccountType": "Poupanca",
        "Balance": "R$848,82",
        "AccountStatus": "Active"
    },
    {
        "Id": "73AF368D-D8C1-E38E-10D0-3CA2002DF876",
        "AccountType": "Aplicacao",
        "Balance": "R$255,92",
        "AccountStatus": "Active"
    },
    {
        "Id": "7671648C-DAA2-8420-81E2-5FF7114D4F2B",
        "AccountType": "Aplicacao",
        "Balance": "R$838,95",
        "AccountStatus": "Active"
    },
    {
        "Id": "6FC14E81-7689-1129-A74E-426F99189E44",
        "AccountType": "Aplicacao",
        "Balance": "R$147,83",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F6B0961F-0F32-F54A-85AC-52AE83449043",
        "AccountType": "Aplicacao",
        "Balance": "R$326,60",
        "AccountStatus": "Active"
    },
    {
        "Id": "D9B15BFF-F6C3-0D7B-2E09-4C3F29A5A353",
        "AccountType": "Poupanca",
        "Balance": "R$377,78",
        "AccountStatus": "Active"
    },
    {
        "Id": "A11267FD-02B5-FFF4-AB23-55856374B06A",
        "AccountType": "Aplicacao",
        "Balance": "R$864,30",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1D02212F-2B55-1827-DAB2-597304609F2C",
        "AccountType": "Custodia",
        "Balance": "R$753,16",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "101DA688-64CD-CF40-B816-D1D3D5A366D3",
        "AccountType": "Custodia",
        "Balance": "R$450,80",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C49C77E1-1432-0E2D-5C39-B26AF47DF78C",
        "AccountType": "Conta Corrente",
        "Balance": "R$181,45",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7ECB14F1-CBB7-FF2D-682A-F23038922615",
        "AccountType": "Poupanca",
        "Balance": "R$457,53",
        "AccountStatus": "Active"
    },
    {
        "Id": "F019888D-D6A6-DD7D-3019-B7C42567D25E",
        "AccountType": "Aplicacao",
        "Balance": "R$821,26",
        "AccountStatus": "Active"
    },
    {
        "Id": "4609DADC-AAD9-5C68-7F58-49A20300ED49",
        "AccountType": "Conta Corrente",
        "Balance": "R$466,31",
        "AccountStatus": "Active"
    },
    {
        "Id": "8789D291-BBD4-0822-0F05-4DC61F781AF9",
        "AccountType": "Conta Corrente",
        "Balance": "R$196,49",
        "AccountStatus": "Active"
    },
    {
        "Id": "D87317E3-5FC8-8DBE-076A-A0514B3378C6",
        "AccountType": "Custodia",
        "Balance": "R$340,33",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "ACA9D864-7309-655D-AFC1-90A26B821946",
        "AccountType": "Aplicacao",
        "Balance": "R$966,34",
        "AccountStatus": "Active"
    },
    {
        "Id": "700962AC-8024-6744-8C6C-B5265C138573",
        "AccountType": "Poupanca",
        "Balance": "R$206,50",
        "AccountStatus": "Active"
    },
    {
        "Id": "E1EDC711-D756-33DD-84C6-3495584DCA4C",
        "AccountType": "Poupanca",
        "Balance": "R$683,51",
        "AccountStatus": "Active"
    },
    {
        "Id": "D1E06404-182C-71F2-9F36-699811687FAB",
        "AccountType": "Poupanca",
        "Balance": "R$610,63",
        "AccountStatus": "Active"
    },
    {
        "Id": "0D633EB1-C4BF-32FC-1751-D133D48FAEDF",
        "AccountType": "Aplicacao",
        "Balance": "R$743,14",
        "AccountStatus": "Active"
    },
    {
        "Id": "59C94F58-692E-7E32-ACB4-5142642CB4D9",
        "AccountType": "Conta Corrente",
        "Balance": "R$292,18",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "48FD7F54-8459-6ACE-612B-E3FB5AED2607",
        "AccountType": "Poupanca",
        "Balance": "R$482,81",
        "AccountStatus": "Active"
    },
    {
        "Id": "DFDE7D32-ECFA-B2CE-5659-A7A4CD5F0853",
        "AccountType": "Conta Corrente",
        "Balance": "R$677,55",
        "AccountStatus": "Active"
    },
    {
        "Id": "DEBFAEE8-A7EC-A476-3DF9-06499047629B",
        "AccountType": "Conta Corrente",
        "Balance": "R$81,19",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "82B91F7B-E264-A0A3-3653-B599453145D4",
        "AccountType": "Aplicacao",
        "Balance": "R$676,10",
        "AccountStatus": "Active"
    },
    {
        "Id": "2F8008D1-AF2A-B6D8-6889-845A2793DA79",
        "AccountType": "Aplicacao",
        "Balance": "R$543,07",
        "AccountStatus": "Active"
    },
    {
        "Id": "96205DA7-449B-704F-C9B5-3CE22372C012",
        "AccountType": "Custodia",
        "Balance": "R$952,65",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7EF8FA7A-48CB-35F5-FCA4-B4E333AE71BC",
        "AccountType": "Aplicacao",
        "Balance": "R$53,16",
        "AccountStatus": "Active"
    },
    {
        "Id": "4838065A-230F-63C6-2BAD-8DBFE976348F",
        "AccountType": "Conta Corrente",
        "Balance": "R$768,48",
        "AccountStatus": "Active"
    },
    {
        "Id": "E277FD16-C484-C066-B7B2-3AEEB2B20C99",
        "AccountType": "Custodia",
        "Balance": "R$714,68",
        "AccountStatus": "Active"
    },
    {
        "Id": "D927EDFB-F629-3755-B1FD-DFD0ACE84A73",
        "AccountType": "Aplicacao",
        "Balance": "R$526,23",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D68EAA15-2DB7-C054-D664-4374F8CAD2EC",
        "AccountType": "Aplicacao",
        "Balance": "R$262,04",
        "AccountStatus": "Active"
    },
    {
        "Id": "78206943-B9A8-AB7E-7424-46618B522299",
        "AccountType": "Poupanca",
        "Balance": "R$249,34",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BB7124F1-03DA-D49D-7252-FA9DC0A72D7D",
        "AccountType": "Poupanca",
        "Balance": "R$417,36",
        "AccountStatus": "Active"
    },
    {
        "Id": "4F6A5673-6600-9B2F-EB6E-C98D21D64978",
        "AccountType": "Conta Corrente",
        "Balance": "R$417,79",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "244AE65B-A884-5168-6F87-A59E12554979",
        "AccountType": "Aplicacao",
        "Balance": "R$280,88",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D7BDE6B7-0615-A8C2-1B0A-188D9D8BFA70",
        "AccountType": "Custodia",
        "Balance": "R$697,59",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "4458528B-696D-E9FB-98D6-A07270482F62",
        "AccountType": "Aplicacao",
        "Balance": "R$426,91",
        "AccountStatus": "Active"
    },
    {
        "Id": "F4249195-C779-D6A9-082C-331AE8088B2E",
        "AccountType": "Conta Corrente",
        "Balance": "R$597,95",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C5B87DD0-BB36-BF69-8AFA-1DB29F36FD34",
        "AccountType": "Aplicacao",
        "Balance": "R$577,66",
        "AccountStatus": "Active"
    },
    {
        "Id": "AF54A84A-8C13-D66D-CB38-288EF002E41A",
        "AccountType": "Custodia",
        "Balance": "R$326,51",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F77727C6-34F9-B8EA-1BE5-DA35ED589CFB",
        "AccountType": "Poupanca",
        "Balance": "R$975,03",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "78DDF022-149D-17D6-1FE6-55347BDEA1BA",
        "AccountType": "Aplicacao",
        "Balance": "R$203,91",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A36A70AF-747F-AC9C-D7DC-2888CB60BD39",
        "AccountType": "Conta Corrente",
        "Balance": "R$297,51",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9EC7CF40-8F09-83DA-786D-96A373E91192",
        "AccountType": "Conta Corrente",
        "Balance": "R$54,04",
        "AccountStatus": "Active"
    },
    {
        "Id": "63DB27D2-5097-3A18-B302-8E1CB71FDA7A",
        "AccountType": "Poupanca",
        "Balance": "R$644,07",
        "AccountStatus": "Active"
    },
    {
        "Id": "B84176A5-1A80-D8E5-8BB0-5A4CE850866A",
        "AccountType": "Poupanca",
        "Balance": "R$936,70",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "B3B3FE23-AFDA-53BE-8B52-D6C1A3A08852",
        "AccountType": "Conta Corrente",
        "Balance": "R$142,76",
        "AccountStatus": "Active"
    },
    {
        "Id": "D2AB88E4-275B-99AD-3573-E6AE7A31B526",
        "AccountType": "Aplicacao",
        "Balance": "R$823,46",
        "AccountStatus": "Active"
    },
    {
        "Id": "32F7673C-7F4A-4C68-451D-8778A5010F61",
        "AccountType": "Poupanca",
        "Balance": "R$511,90",
        "AccountStatus": "Active"
    },
    {
        "Id": "4D7EC098-DB86-8CCB-5D9D-5A54CCBF64FC",
        "AccountType": "Poupanca",
        "Balance": "R$963,19",
        "AccountStatus": "Active"
    },
    {
        "Id": "63BE386E-0CD7-0890-A1EF-06CECAFB50E3",
        "AccountType": "Custodia",
        "Balance": "R$419,81",
        "AccountStatus": "Active"
    },
    {
        "Id": "5C5B6AFD-8BB3-E233-0FEE-893B94185795",
        "AccountType": "Conta Corrente",
        "Balance": "R$565,17",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A7A4D3E9-AB53-E4A5-8995-75FC53C0DDFB",
        "AccountType": "Conta Corrente",
        "Balance": "R$561,46",
        "AccountStatus": "Active"
    },
    {
        "Id": "0F56FF74-8F4B-EECA-6D1D-C709CC945C31",
        "AccountType": "Aplicacao",
        "Balance": "R$718,80",
        "AccountStatus": "Active"
    },
    {
        "Id": "286575CE-F4D6-D433-1A6D-ED328D12FFBE",
        "AccountType": "Aplicacao",
        "Balance": "R$518,69",
        "AccountStatus": "Active"
    },
    {
        "Id": "2EBB635A-5D1A-B3A0-3731-1BD405166C02",
        "AccountType": "Poupanca",
        "Balance": "R$951,64",
        "AccountStatus": "Active"
    },
    {
        "Id": "BF1CA7B7-9620-6D14-8DBC-D81AA1A12CFF",
        "AccountType": "Custodia",
        "Balance": "R$799,03",
        "AccountStatus": "Active"
    },
    {
        "Id": "06F9C13D-60D0-E6E4-FE52-5FB827657116",
        "AccountType": "Aplicacao",
        "Balance": "R$56,94",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9B447AC8-A86D-A368-1961-CFFC4C10BA77",
        "AccountType": "Conta Corrente",
        "Balance": "R$305,35",
        "AccountStatus": "Active"
    },
    {
        "Id": "00FBC3AB-C017-614B-E665-DCE239D8F118",
        "AccountType": "Poupanca",
        "Balance": "R$528,32",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "B0431803-F9B0-B1D4-A658-523F59DDACC6",
        "AccountType": "Custodia",
        "Balance": "R$946,54",
        "AccountStatus": "Active"
    },
    {
        "Id": "3914FC70-E089-176C-7E1D-B64757344F23",
        "AccountType": "Aplicacao",
        "Balance": "R$550,19",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7931D703-2B57-94EA-5C2B-DB8EC7CABE80",
        "AccountType": "Custodia",
        "Balance": "R$555,23",
        "AccountStatus": "Active"
    },
    {
        "Id": "CE95B44C-CDAF-6AE3-2ED5-6A25FA5ACE8E",
        "AccountType": "Aplicacao",
        "Balance": "R$628,22",
        "AccountStatus": "Active"
    },
    {
        "Id": "9D3E3DB1-C23A-C3D7-D4F6-3AD6CE482789",
        "AccountType": "Aplicacao",
        "Balance": "R$60,20",
        "AccountStatus": "Active"
    },
    {
        "Id": "2BCD836D-4C07-D7BE-D429-ED213B2DC291",
        "AccountType": "Poupanca",
        "Balance": "R$214,29",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6DDA5071-22A9-42A0-5627-A82C9DACDA55",
        "AccountType": "Aplicacao",
        "Balance": "R$959,06",
        "AccountStatus": "Active"
    },
    {
        "Id": "2B30DEC2-5FE5-1477-BF52-3F62D2634EE3",
        "AccountType": "Poupanca",
        "Balance": "R$482,53",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D321DDA0-B9F0-1001-B2A8-7857AB1CF2EA",
        "AccountType": "Custodia",
        "Balance": "R$219,50",
        "AccountStatus": "Active"
    },
    {
        "Id": "0EC4D9CF-CAC7-9D1E-2E20-C27CBDFB8941",
        "AccountType": "Conta Corrente",
        "Balance": "R$994,52",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "21BCC09D-4E70-B3FE-ECDA-1A26598AC17E",
        "AccountType": "Aplicacao",
        "Balance": "R$560,50",
        "AccountStatus": "Active"
    },
    {
        "Id": "CAFE5DC9-E3CF-00ED-5136-0A9C7080453E",
        "AccountType": "Custodia",
        "Balance": "R$799,84",
        "AccountStatus": "Active"
    },
    {
        "Id": "950C29EF-389A-65E8-2E04-20D3D3E45613",
        "AccountType": "Poupanca",
        "Balance": "R$351,71",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "11DC6850-9F93-71B2-7D3C-73E00A64BD56",
        "AccountType": "Aplicacao",
        "Balance": "R$881,24",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "ED95FE5A-2FAE-1F68-7A77-52A6FFCEEEEE",
        "AccountType": "Custodia",
        "Balance": "R$627,66",
        "AccountStatus": "Active"
    },
    {
        "Id": "D6117991-8980-74A5-D9E4-B8EE06E05C14",
        "AccountType": "Conta Corrente",
        "Balance": "R$125,63",
        "AccountStatus": "Active"
    },
    {
        "Id": "1939D78D-8582-C5D7-F3B4-E63050B0B508",
        "AccountType": "Conta Corrente",
        "Balance": "R$801,91",
        "AccountStatus": "Active"
    },
    {
        "Id": "FB2580AB-7370-0BFF-4106-444820FC1938",
        "AccountType": "Poupanca",
        "Balance": "R$265,14",
        "AccountStatus": "Active"
    },
    {
        "Id": "CE58786C-BAC5-E42D-EC78-19164445D788",
        "AccountType": "Conta Corrente",
        "Balance": "R$996,29",
        "AccountStatus": "Active"
    },
    {
        "Id": "BC91FCFB-E3ED-6E71-EC8A-61F305971C96",
        "AccountType": "Conta Corrente",
        "Balance": "R$822,60",
        "AccountStatus": "Active"
    },
    {
        "Id": "70EFC9AE-459C-4894-EADB-0F10CE64F6B2",
        "AccountType": "Conta Corrente",
        "Balance": "R$516,75",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "DF249F6B-8300-38A5-5760-A57DDC35CED0",
        "AccountType": "Conta Corrente",
        "Balance": "R$903,23",
        "AccountStatus": "Active"
    },
    {
        "Id": "ABBC117B-6A07-62D9-A3F1-D7F1BDCB81BE",
        "AccountType": "Custodia",
        "Balance": "R$416,80",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "53678B08-905D-A410-1493-89E1074681E7",
        "AccountType": "Aplicacao",
        "Balance": "R$977,61",
        "AccountStatus": "Active"
    },
    {
        "Id": "9F05F0A9-634D-2F05-E4ED-BD29B65A2E39",
        "AccountType": "Custodia",
        "Balance": "R$884,42",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "4EF5801D-217A-E94D-285A-83122AAF3BBB",
        "AccountType": "Poupanca",
        "Balance": "R$202,11",
        "AccountStatus": "Active"
    },
    {
        "Id": "934A8433-642D-14A7-EA9E-2BF83A58A210",
        "AccountType": "Custodia",
        "Balance": "R$917,73",
        "AccountStatus": "Active"
    },
    {
        "Id": "ADB13D47-AAAA-3293-5E72-EC76945C3C8C",
        "AccountType": "Poupanca",
        "Balance": "R$391,10",
        "AccountStatus": "Active"
    },
    {
        "Id": "88D8F7D2-1647-34A0-FB54-02424A5D977B",
        "AccountType": "Poupanca",
        "Balance": "R$205,91",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3DDA4C88-8637-9B70-F6D4-C95C786DDF8E",
        "AccountType": "Conta Corrente",
        "Balance": "R$658,34",
        "AccountStatus": "Active"
    },
    {
        "Id": "353BCBE4-C79C-CDE3-E78D-0B2C0AB3DB9C",
        "AccountType": "Conta Corrente",
        "Balance": "R$449,18",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1719538C-53B2-D519-5084-394B3B3BA763",
        "AccountType": "Conta Corrente",
        "Balance": "R$835,98",
        "AccountStatus": "Active"
    },
    {
        "Id": "4267A50D-495D-F4F9-79EC-7440AECFE127",
        "AccountType": "Aplicacao",
        "Balance": "R$50,21",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "ECF92500-007B-285D-B1B6-4F6A1E1AA754",
        "AccountType": "Custodia",
        "Balance": "R$269,37",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "4A10871A-CBAA-C325-39E4-BCB15EA7274A",
        "AccountType": "Custodia",
        "Balance": "R$631,50",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C1D0F5DA-4887-5B0D-97C8-38DEA9C875AF",
        "AccountType": "Aplicacao",
        "Balance": "R$763,53",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FF2B8BF9-4721-AE72-8318-8AF75BDA3927",
        "AccountType": "Custodia",
        "Balance": "R$571,44",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "55ED7CF3-56C1-674C-140F-41C1E9CE101E",
        "AccountType": "Custodia",
        "Balance": "R$780,55",
        "AccountStatus": "Active"
    },
    {
        "Id": "011712D1-A2B6-280E-3C51-D414481DB705",
        "AccountType": "Poupanca",
        "Balance": "R$433,31",
        "AccountStatus": "Active"
    },
    {
        "Id": "23090A4D-C6D1-CD1B-711C-EC26C088DB2E",
        "AccountType": "Conta Corrente",
        "Balance": "R$759,07",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BEC158B9-DF8E-773C-B4E7-51C7D6863815",
        "AccountType": "Custodia",
        "Balance": "R$754,38",
        "AccountStatus": "Active"
    },
    {
        "Id": "3CC852D5-07E8-CBB0-ACCE-6661A9692392",
        "AccountType": "Conta Corrente",
        "Balance": "R$502,87",
        "AccountStatus": "Active"
    },
    {
        "Id": "E39F4F24-BCBC-63AC-5F58-32C3AB0D8A2A",
        "AccountType": "Conta Corrente",
        "Balance": "R$420,13",
        "AccountStatus": "Active"
    },
    {
        "Id": "8A794BDA-DDAF-C20F-B3E3-E2D7EDB62D77",
        "AccountType": "Aplicacao",
        "Balance": "R$237,03",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "08A4BD41-C52B-E70C-B3DC-FAB9C636F289",
        "AccountType": "Conta Corrente",
        "Balance": "R$807,79",
        "AccountStatus": "Active"
    },
    {
        "Id": "43842BE0-4E55-1745-038B-07905056F090",
        "AccountType": "Custodia",
        "Balance": "R$327,41",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9C349228-48CB-6FAF-5240-7B3A5B79756F",
        "AccountType": "Custodia",
        "Balance": "R$532,05",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1E06D21E-BA08-E832-2229-774ECD1C01EA",
        "AccountType": "Poupanca",
        "Balance": "R$603,02",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "39123FE7-CC54-F9D3-7FE6-2E99BDEFCB5D",
        "AccountType": "Custodia",
        "Balance": "R$63,88",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "AD6FA8A8-D389-96B4-41D2-BCC4D9A7959B",
        "AccountType": "Conta Corrente",
        "Balance": "R$142,34",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FE0B4F50-0A3A-73B7-E828-F37899DA787A",
        "AccountType": "Conta Corrente",
        "Balance": "R$868,01",
        "AccountStatus": "Active"
    },
    {
        "Id": "DD268B7D-0C45-EC04-F031-29C75451D200",
        "AccountType": "Custodia",
        "Balance": "R$398,90",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8107D0E8-E8FE-9DF6-729E-46E1A1A3EFBB",
        "AccountType": "Conta Corrente",
        "Balance": "R$382,58",
        "AccountStatus": "Active"
    },
    {
        "Id": "CA074B0E-4679-74AD-110F-1393D24B726F",
        "AccountType": "Conta Corrente",
        "Balance": "R$869,02",
        "AccountStatus": "Active"
    },
    {
        "Id": "35113203-AA6A-3AE0-2778-B38831421EB3",
        "AccountType": "Poupanca",
        "Balance": "R$977,12",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E9DCE6EA-D0F5-EF36-5BAE-1C6CEF2E0875",
        "AccountType": "Conta Corrente",
        "Balance": "R$246,97",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8871EC73-8455-E8D4-E72C-9BC755E27D08",
        "AccountType": "Custodia",
        "Balance": "R$256,39",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E67C7AC9-CB10-4373-81C6-419CC0274878",
        "AccountType": "Aplicacao",
        "Balance": "R$217,17",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F1F2FBB7-C432-F4F8-50AF-893AC6A758F4",
        "AccountType": "Conta Corrente",
        "Balance": "R$478,91",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "5F9A4CC0-B60E-DC84-3781-868DA957F1D2",
        "AccountType": "Custodia",
        "Balance": "R$820,53",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FA152541-1AD9-7094-75CD-61589E83CD5C",
        "AccountType": "Poupanca",
        "Balance": "R$597,13",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A61928B9-7E29-BF97-617C-8617684AAA66",
        "AccountType": "Poupanca",
        "Balance": "R$295,75",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F085A104-B66E-730F-3370-979C6C23F1DD",
        "AccountType": "Conta Corrente",
        "Balance": "R$870,05",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A2D52291-940F-2842-052E-4D66D712133B",
        "AccountType": "Aplicacao",
        "Balance": "R$947,09",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "07428309-28AA-0CA5-7203-9057B2049F85",
        "AccountType": "Aplicacao",
        "Balance": "R$563,51",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "87690A27-5C88-2923-9970-BFEFF29BABDE",
        "AccountType": "Conta Corrente",
        "Balance": "R$126,79",
        "AccountStatus": "Active"
    },
    {
        "Id": "5B729038-012E-6E0F-E400-E7C74B5152F6",
        "AccountType": "Custodia",
        "Balance": "R$869,98",
        "AccountStatus": "Active"
    },
    {
        "Id": "84D7B4C2-DAC0-FCBE-7A09-93DD6DCF86C4",
        "AccountType": "Custodia",
        "Balance": "R$390,68",
        "AccountStatus": "Active"
    },
    {
        "Id": "07A5E7F5-E071-3874-3D28-A355197371CD",
        "AccountType": "Poupanca",
        "Balance": "R$734,58",
        "AccountStatus": "Active"
    },
    {
        "Id": "4A830B3D-EE6F-7C68-BBE6-88CE66357298",
        "AccountType": "Aplicacao",
        "Balance": "R$232,94",
        "AccountStatus": "Active"
    },
    {
        "Id": "3E03A9FE-B892-EC4D-DC64-4AF21D6225F6",
        "AccountType": "Poupanca",
        "Balance": "R$937,43",
        "AccountStatus": "Active"
    },
    {
        "Id": "3BC26ED7-14EB-0B7F-A9F9-2187589E0E06",
        "AccountType": "Custodia",
        "Balance": "R$235,74",
        "AccountStatus": "Active"
    },
    {
        "Id": "AF53EAB0-4B68-8BBD-7D84-CF7D13B8D4CC",
        "AccountType": "Custodia",
        "Balance": "R$586,04",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "5EE06D12-3C56-966B-0631-8E0D066C33F8",
        "AccountType": "Poupanca",
        "Balance": "R$934,36",
        "AccountStatus": "Active"
    },
    {
        "Id": "B1CFB576-1603-916C-F428-46A2E16CEAD9",
        "AccountType": "Poupanca",
        "Balance": "R$251,97",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "AD4B9C82-328B-2FDB-BF85-42A01082CD56",
        "AccountType": "Custodia",
        "Balance": "R$502,01",
        "AccountStatus": "Active"
    },
    {
        "Id": "0624367D-4C48-351E-DF7D-0FDFE029B2DD",
        "AccountType": "Aplicacao",
        "Balance": "R$580,88",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "43C70C6A-DC6F-ACD9-DDCE-8850F884FF24",
        "AccountType": "Aplicacao",
        "Balance": "R$726,83",
        "AccountStatus": "Active"
    },
    {
        "Id": "6225366A-EA99-DEF1-62B9-0C0D3DF339D2",
        "AccountType": "Aplicacao",
        "Balance": "R$346,64",
        "AccountStatus": "Active"
    },
    {
        "Id": "EE54B7D1-C45D-BD11-C099-A2453AD7DE21",
        "AccountType": "Custodia",
        "Balance": "R$75,84",
        "AccountStatus": "Active"
    },
    {
        "Id": "B0366335-5C84-8BB5-EE95-4D01D6F0D257",
        "AccountType": "Custodia",
        "Balance": "R$868,71",
        "AccountStatus": "Active"
    },
    {
        "Id": "5CA0BC00-1384-DDE3-7E76-A1DE36172754",
        "AccountType": "Poupanca",
        "Balance": "R$526,89",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "70DD233A-29A7-97BD-C9E9-EAF9B264A0F0",
        "AccountType": "Poupanca",
        "Balance": "R$190,89",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9A9746DC-69DE-430C-3B3A-9ADD490C401E",
        "AccountType": "Conta Corrente",
        "Balance": "R$929,93",
        "AccountStatus": "Active"
    },
    {
        "Id": "F33A94CC-90C5-2D40-484B-AF788D640792",
        "AccountType": "Aplicacao",
        "Balance": "R$570,72",
        "AccountStatus": "Active"
    },
    {
        "Id": "8AD70C6E-B6DE-8342-896D-683F6F9D1B99",
        "AccountType": "Conta Corrente",
        "Balance": "R$524,76",
        "AccountStatus": "Active"
    },
    {
        "Id": "3686DB2E-A12B-93A1-393B-EF9713CD67F5",
        "AccountType": "Custodia",
        "Balance": "R$355,02",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8B0A6201-5FEB-E7D9-19F7-3D314CCAB395",
        "AccountType": "Aplicacao",
        "Balance": "R$648,03",
        "AccountStatus": "Active"
    },
    {
        "Id": "10FB55A1-A9A2-3264-FD87-9DD82F7B032F",
        "AccountType": "Poupanca",
        "Balance": "R$792,89",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F2DD1DDA-EDD7-53CE-04D4-D919A9B5BA5C",
        "AccountType": "Aplicacao",
        "Balance": "R$918,70",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A5412889-02F0-D30E-A89B-6A3A7AAD8FFE",
        "AccountType": "Conta Corrente",
        "Balance": "R$670,53",
        "AccountStatus": "Active"
    },
    {
        "Id": "21DE8727-659B-3AC6-57B4-02313D6E303C",
        "AccountType": "Poupanca",
        "Balance": "R$301,43",
        "AccountStatus": "Active"
    },
    {
        "Id": "B3E12D67-D680-F1B8-7E5D-E70C09430C50",
        "AccountType": "Custodia",
        "Balance": "R$650,96",
        "AccountStatus": "Active"
    },
    {
        "Id": "8A351D04-EB34-07CA-B8B0-E5A39243DD28",
        "AccountType": "Poupanca",
        "Balance": "R$330,25",
        "AccountStatus": "Active"
    },
    {
        "Id": "2FFE3F7F-4EB9-6F9F-EDD5-BAD4E57F1117",
        "AccountType": "Custodia",
        "Balance": "R$217,68",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "0653ED2E-8574-0157-97BD-9E422519B8C0",
        "AccountType": "Aplicacao",
        "Balance": "R$748,27",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "61F4A076-161F-EE40-BD19-B7E622F70133",
        "AccountType": "Poupanca",
        "Balance": "R$158,44",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7999F2C0-C925-76D6-CD29-959A485AC20D",
        "AccountType": "Conta Corrente",
        "Balance": "R$963,93",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1F7CE4F6-1DC0-63FD-776C-0FFA048FD8FC",
        "AccountType": "Poupanca",
        "Balance": "R$663,96",
        "AccountStatus": "Active"
    },
    {
        "Id": "BF07090B-6B8F-1367-0004-C8D4C01043EC",
        "AccountType": "Poupanca",
        "Balance": "R$204,63",
        "AccountStatus": "Active"
    },
    {
        "Id": "60724F57-1BE1-F16F-2A04-66AA79B02CEC",
        "AccountType": "Poupanca",
        "Balance": "R$672,27",
        "AccountStatus": "Active"
    },
    {
        "Id": "AA84A311-8929-D08C-BC38-8587C1663F83",
        "AccountType": "Aplicacao",
        "Balance": "R$723,87",
        "AccountStatus": "Active"
    },
    {
        "Id": "67A1FFBB-4707-AEAB-7A4F-4B43EDDB2C72",
        "AccountType": "Poupanca",
        "Balance": "R$438,39",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BDF84681-B7B7-75D3-9D8D-11CC7E7D7142",
        "AccountType": "Custodia",
        "Balance": "R$763,02",
        "AccountStatus": "Active"
    },
    {
        "Id": "C90496D0-40ED-3B6D-802C-FA248042E046",
        "AccountType": "Aplicacao",
        "Balance": "R$665,92",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "4200A946-B819-9CBA-5931-E5E520EB79D2",
        "AccountType": "Poupanca",
        "Balance": "R$744,66",
        "AccountStatus": "Active"
    },
    {
        "Id": "12F384DE-5A8B-3409-DE42-3AF5EECF67F8",
        "AccountType": "Custodia",
        "Balance": "R$809,46",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FA83BB99-8E72-DBD1-4DAC-799135E938D1",
        "AccountType": "Conta Corrente",
        "Balance": "R$699,62",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BF2C6197-3C69-ADEA-F515-391B1BCF2BBF",
        "AccountType": "Poupanca",
        "Balance": "R$243,53",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7025621D-D159-8823-8C28-25F9351FA761",
        "AccountType": "Custodia",
        "Balance": "R$394,82",
        "AccountStatus": "Active"
    },
    {
        "Id": "13D16D28-1A40-764D-11A3-F169204A3049",
        "AccountType": "Custodia",
        "Balance": "R$371,59",
        "AccountStatus": "Active"
    },
    {
        "Id": "3AD5C8B8-9220-9807-3F44-E9D2F71F81F1",
        "AccountType": "Custodia",
        "Balance": "R$934,13",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6115C8E6-11FE-4EFB-CFAC-6ADB1D1CCFB3",
        "AccountType": "Aplicacao",
        "Balance": "R$100,58",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "0A7BBACE-14D6-517D-B6D3-A4B747A5CF13",
        "AccountType": "Conta Corrente",
        "Balance": "R$885,57",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A5B044A8-2E7F-51F2-83DF-92CA57F806E1",
        "AccountType": "Conta Corrente",
        "Balance": "R$369,11",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "705A0901-7C24-2F68-4AF8-F7CECEE8D562",
        "AccountType": "Poupanca",
        "Balance": "R$949,71",
        "AccountStatus": "Active"
    },
    {
        "Id": "34E0D810-88D1-563D-11C9-7CA7DC59CEFE",
        "AccountType": "Poupanca",
        "Balance": "R$117,51",
        "AccountStatus": "Active"
    },
    {
        "Id": "9381922E-D636-032C-04EE-3183BA149033",
        "AccountType": "Custodia",
        "Balance": "R$71,77",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2193219C-54D7-5DFF-0C76-9BAFA4ECEEB3",
        "AccountType": "Aplicacao",
        "Balance": "R$84,66",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "43B9E91B-F36C-06B4-7F60-CC277C70956B",
        "AccountType": "Poupanca",
        "Balance": "R$845,69",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F773DEF3-20F7-B936-E6CE-212B58AB68E7",
        "AccountType": "Custodia",
        "Balance": "R$398,52",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F38BCD2B-19CB-3E8C-CA54-3545903E8218",
        "AccountType": "Custodia",
        "Balance": "R$404,32",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "5824A697-1CD0-8B0C-DFBE-E03D54C44079",
        "AccountType": "Conta Corrente",
        "Balance": "R$79,72",
        "AccountStatus": "Active"
    },
    {
        "Id": "C907C2CD-5FA1-AEE3-F63E-C83723F9A76E",
        "AccountType": "Custodia",
        "Balance": "R$494,78",
        "AccountStatus": "Active"
    },
    {
        "Id": "95E1E107-8C2A-FE6B-3A9E-B8C9A8C8CF26",
        "AccountType": "Aplicacao",
        "Balance": "R$760,74",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FA2169DA-E824-2FA6-F2C8-6797CBA6C03E",
        "AccountType": "Conta Corrente",
        "Balance": "R$976,67",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7E22FE98-E005-98BD-1FCF-88BF937C870D",
        "AccountType": "Aplicacao",
        "Balance": "R$394,18",
        "AccountStatus": "Active"
    },
    {
        "Id": "C2185237-9E13-58CE-FD0F-D6C79BC69FD1",
        "AccountType": "Custodia",
        "Balance": "R$752,63",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2DCFEE8F-F2EF-E061-88C4-C3560AB6E74B",
        "AccountType": "Poupanca",
        "Balance": "R$468,60",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "BB2ED4ED-0C4E-7901-D9C6-2FC363150195",
        "AccountType": "Custodia",
        "Balance": "R$94,41",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "71E7D46F-71C3-049A-6D77-C387C4EEB42D",
        "AccountType": "Aplicacao",
        "Balance": "R$973,97",
        "AccountStatus": "Active"
    },
    {
        "Id": "9A46B46E-5132-EDD6-7CD7-0FA9DD6F71B5",
        "AccountType": "Poupanca",
        "Balance": "R$900,91",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1E53DC2A-1788-F720-1CF6-F71B6EB1D4FF",
        "AccountType": "Poupanca",
        "Balance": "R$967,82",
        "AccountStatus": "Active"
    },
    {
        "Id": "F7A0ADE9-5627-6CCA-5C6D-A8B7C3EEB147",
        "AccountType": "Conta Corrente",
        "Balance": "R$260,16",
        "AccountStatus": "Active"
    },
    {
        "Id": "CD201CB8-1307-99AF-E3B8-D44989A86229",
        "AccountType": "Poupanca",
        "Balance": "R$756,42",
        "AccountStatus": "Active"
    },
    {
        "Id": "CAF7E5DD-9210-CE70-C154-7FB65ECE257F",
        "AccountType": "Custodia",
        "Balance": "R$398,87",
        "AccountStatus": "Active"
    },
    {
        "Id": "F51FF570-54D1-939C-455C-BC3912B895E7",
        "AccountType": "Aplicacao",
        "Balance": "R$823,62",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "6F4DF712-17B6-2230-0023-2C7B1C5AD05E",
        "AccountType": "Conta Corrente",
        "Balance": "R$308,63",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "1BABF577-8BE7-0F27-72AF-03478300A9EC",
        "AccountType": "Poupanca",
        "Balance": "R$60,03",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FCE7C2F7-F145-9D3B-EA1A-9ECF497B7138",
        "AccountType": "Aplicacao",
        "Balance": "R$623,13",
        "AccountStatus": "Active"
    },
    {
        "Id": "6C24E964-1178-0D3C-626C-F4693C58CD4D",
        "AccountType": "Aplicacao",
        "Balance": "R$203,93",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7E093CC0-6CC3-BB0A-E303-F4A07F927CFA",
        "AccountType": "Poupanca",
        "Balance": "R$88,16",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "08554483-C542-F029-FB05-E7E51FBC1031",
        "AccountType": "Conta Corrente",
        "Balance": "R$884,75",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D18E860A-BA74-95D1-0A64-25F53AFEA628",
        "AccountType": "Conta Corrente",
        "Balance": "R$883,10",
        "AccountStatus": "Active"
    },
    {
        "Id": "A7979682-605B-6B65-2382-432C6CABBF1D",
        "AccountType": "Conta Corrente",
        "Balance": "R$740,33",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C3576BB6-4E02-8A59-4FE4-008077F6D157",
        "AccountType": "Conta Corrente",
        "Balance": "R$618,92",
        "AccountStatus": "Active"
    },
    {
        "Id": "F16ACDD8-4849-1D74-8C22-38D5F90461CC",
        "AccountType": "Poupanca",
        "Balance": "R$491,96",
        "AccountStatus": "Active"
    },
    {
        "Id": "7A5FF8BE-5001-611D-6B7E-8F74B9D2540C",
        "AccountType": "Poupanca",
        "Balance": "R$906,52",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "94227F56-3E48-F9F4-4CE3-32812C0E601F",
        "AccountType": "Custodia",
        "Balance": "R$382,46",
        "AccountStatus": "Active"
    },
    {
        "Id": "C91CC91D-BB47-6560-36BC-E8CB3E0DB45E",
        "AccountType": "Aplicacao",
        "Balance": "R$67,56",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2E6AC513-7048-E34E-4237-BDB46EF76E97",
        "AccountType": "Aplicacao",
        "Balance": "R$752,95",
        "AccountStatus": "Active"
    },
    {
        "Id": "5D68AC54-8047-0C75-62FB-817A65B45AE1",
        "AccountType": "Conta Corrente",
        "Balance": "R$889,96",
        "AccountStatus": "Active"
    },
    {
        "Id": "DA082946-4812-221E-C8DC-997954E06A9D",
        "AccountType": "Aplicacao",
        "Balance": "R$463,33",
        "AccountStatus": "Active"
    },
    {
        "Id": "F30D4280-4962-6702-BD22-31E5D5DF1449",
        "AccountType": "Custodia",
        "Balance": "R$357,32",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E05DD23F-652C-D22D-E97F-8168EECCE35F",
        "AccountType": "Conta Corrente",
        "Balance": "R$433,32",
        "AccountStatus": "Active"
    },
    {
        "Id": "5FAB4280-2129-6CA4-A6E1-CB5B8854C2F2",
        "AccountType": "Custodia",
        "Balance": "R$695,54",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FF4229BA-D656-21E0-C465-674AAAB7EB03",
        "AccountType": "Poupanca",
        "Balance": "R$728,65",
        "AccountStatus": "Active"
    },
    {
        "Id": "E8BE9C3F-3B87-3514-A6C5-FC8BEE2F978F",
        "AccountType": "Custodia",
        "Balance": "R$304,91",
        "AccountStatus": "Active"
    },
    {
        "Id": "14BCAAEF-E4E9-0A18-8794-C4E6C2E4536E",
        "AccountType": "Poupanca",
        "Balance": "R$480,63",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7B54DBDC-8140-E0B7-0E00-6A24735D2A2E",
        "AccountType": "Aplicacao",
        "Balance": "R$590,34",
        "AccountStatus": "Active"
    },
    {
        "Id": "1F8F2B76-6823-87A3-DDCE-C0722386EEB0",
        "AccountType": "Custodia",
        "Balance": "R$503,66",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2C7F134D-AD2D-2DF4-62A1-762428173A51",
        "AccountType": "Aplicacao",
        "Balance": "R$959,51",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "71508C69-6025-008C-E2BF-8848452D52D6",
        "AccountType": "Conta Corrente",
        "Balance": "R$822,20",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "94736C61-5D73-205F-EBB5-C69C8ECCE644",
        "AccountType": "Custodia",
        "Balance": "R$176,89",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7BD286D9-79C8-BA7F-2D3D-27800C18C879",
        "AccountType": "Poupanca",
        "Balance": "R$667,47",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A23F8F5D-6C53-DD6E-83C6-44F629294961",
        "AccountType": "Poupanca",
        "Balance": "R$807,96",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "15175AD8-9691-DFC0-16C3-AF0333FF7CA4",
        "AccountType": "Poupanca",
        "Balance": "R$787,55",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E4D48F72-F8A9-1497-9996-A7DEF64F623A",
        "AccountType": "Conta Corrente",
        "Balance": "R$686,45",
        "AccountStatus": "Active"
    },
    {
        "Id": "7B0A145E-E972-1A2A-A6D8-0EBEBB2522F6",
        "AccountType": "Custodia",
        "Balance": "R$394,89",
        "AccountStatus": "Active"
    },
    {
        "Id": "99C2A5B3-0515-29B2-2EB2-24AB2BA0F669",
        "AccountType": "Aplicacao",
        "Balance": "R$974,11",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "C93AA8F0-F0C9-11AA-F974-910312DBCEFA",
        "AccountType": "Custodia",
        "Balance": "R$192,42",
        "AccountStatus": "Active"
    },
    {
        "Id": "47B43244-21A9-FA84-DC3D-5231B69BF8A2",
        "AccountType": "Conta Corrente",
        "Balance": "R$414,45",
        "AccountStatus": "Active"
    },
    {
        "Id": "FB892FE5-DB55-E0D0-1A4B-2B3744E50F84",
        "AccountType": "Poupanca",
        "Balance": "R$968,87",
        "AccountStatus": "Active"
    },
    {
        "Id": "62F844F5-1B1B-EE2B-DD89-B285C0FA9216",
        "AccountType": "Aplicacao",
        "Balance": "R$263,55",
        "AccountStatus": "Active"
    },
    {
        "Id": "EFF05D00-EE68-B475-8004-12D3172CDCDB",
        "AccountType": "Aplicacao",
        "Balance": "R$382,71",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "7921599D-5785-D13A-C690-8122B866C511",
        "AccountType": "Poupanca",
        "Balance": "R$289,46",
        "AccountStatus": "Active"
    },
    {
        "Id": "47963392-5943-FBBC-0886-DAE9D1020980",
        "AccountType": "Aplicacao",
        "Balance": "R$585,07",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "AB7E3087-3D8E-9B9C-8C2B-7FCC04002218",
        "AccountType": "Conta Corrente",
        "Balance": "R$400,00",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F16FA2C1-D71E-B572-E1CB-64D56442DAA4",
        "AccountType": "Poupanca",
        "Balance": "R$836,11",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "F74B7ED7-80EF-743D-EB7C-6E6CAFCF6572",
        "AccountType": "Poupanca",
        "Balance": "R$730,77",
        "AccountStatus": "Active"
    },
    {
        "Id": "B5F523FD-A2A9-F60E-DE96-5F59E903721A",
        "AccountType": "Poupanca",
        "Balance": "R$552,19",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E6AFD46C-3A8E-8848-019A-8938911CE563",
        "AccountType": "Custodia",
        "Balance": "R$243,30",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3244C6B0-7825-2283-A378-77D8036B0B0B",
        "AccountType": "Conta Corrente",
        "Balance": "R$868,65",
        "AccountStatus": "Active"
    },
    {
        "Id": "22453233-F55E-4EB1-7481-95CAADEAC631",
        "AccountType": "Conta Corrente",
        "Balance": "R$408,58",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "D969FEBE-5902-C786-4DDA-AC5F00FA17A4",
        "AccountType": "Aplicacao",
        "Balance": "R$241,62",
        "AccountStatus": "Active"
    },
    {
        "Id": "5774AB15-1DD7-A42F-5EFC-34167AACAA93",
        "AccountType": "Custodia",
        "Balance": "R$324,96",
        "AccountStatus": "Active"
    },
    {
        "Id": "7C433890-B375-856E-9119-CA859BAE1CDC",
        "AccountType": "Poupanca",
        "Balance": "R$744,37",
        "AccountStatus": "Active"
    },
    {
        "Id": "355CA3C8-FCD5-74A8-0109-C0888F6F3FEF",
        "AccountType": "Conta Corrente",
        "Balance": "R$418,14",
        "AccountStatus": "Active"
    },
    {
        "Id": "449D2471-883E-6E28-0EE8-79157B9FFC32",
        "AccountType": "Poupanca",
        "Balance": "R$201,41",
        "AccountStatus": "Active"
    },
    {
        "Id": "2C97CFDF-96AB-64E8-38B8-9AFBA1469A96",
        "AccountType": "Aplicacao",
        "Balance": "R$695,56",
        "AccountStatus": "Active"
    },
    {
        "Id": "E40A4A2F-4EB6-BF4F-3A36-E964D6AA2CD1",
        "AccountType": "Conta Corrente",
        "Balance": "R$995,46",
        "AccountStatus": "Active"
    },
    {
        "Id": "5F6347F9-EC15-1D7D-1D40-A15ED1ADFDC0",
        "AccountType": "Poupanca",
        "Balance": "R$252,02",
        "AccountStatus": "Active"
    },
    {
        "Id": "BF1E5457-F118-2F2B-DB09-D4A1FA787C08",
        "AccountType": "Custodia",
        "Balance": "R$234,03",
        "AccountStatus": "Active"
    },
    {
        "Id": "D8870736-053F-C286-D302-F003D618D7A9",
        "AccountType": "Poupanca",
        "Balance": "R$363,27",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "9F4F8E58-9407-50DF-00AD-ADFC268D0417",
        "AccountType": "Custodia",
        "Balance": "R$874,03",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3E5554BC-ADD3-801C-5AF3-B49FA397C119",
        "AccountType": "Aplicacao",
        "Balance": "R$794,01",
        "AccountStatus": "Active"
    },
    {
        "Id": "6F9FED1E-30C4-D961-CA92-6460C91C1908",
        "AccountType": "Conta Corrente",
        "Balance": "R$834,07",
        "AccountStatus": "Active"
    },
    {
        "Id": "C8D0FC19-DDB5-2766-ED26-5E21DB1918A3",
        "AccountType": "Aplicacao",
        "Balance": "R$824,71",
        "AccountStatus": "Active"
    },
    {
        "Id": "79ED2A76-0CB8-8390-A10E-09A2EDECA7C7",
        "AccountType": "Aplicacao",
        "Balance": "R$589,18",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "FB8BCABB-B3E0-F76D-3349-3AACB4D015F6",
        "AccountType": "Conta Corrente",
        "Balance": "R$111,21",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8A89E797-B06F-8DF0-7BC0-BEBEFED4C7F5",
        "AccountType": "Aplicacao",
        "Balance": "R$462,23",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "601B7933-A59F-878F-B977-E370FF17022A",
        "AccountType": "Poupanca",
        "Balance": "R$691,59",
        "AccountStatus": "Active"
    },
    {
        "Id": "B5EA3F70-35D2-36F0-A3FA-21E193ED4D4F",
        "AccountType": "Poupanca",
        "Balance": "R$618,48",
        "AccountStatus": "Active"
    },
    {
        "Id": "624172E8-18FB-CA58-7E3E-84D623915CA0",
        "AccountType": "Conta Corrente",
        "Balance": "R$713,97",
        "AccountStatus": "Active"
    },
    {
        "Id": "719ECE28-E370-33FE-FDDE-375079F30FE4",
        "AccountType": "Aplicacao",
        "Balance": "R$514,86",
        "AccountStatus": "Active"
    },
    {
        "Id": "40549E70-F61B-8A5E-77A8-A9CCAEA518EA",
        "AccountType": "Custodia",
        "Balance": "R$355,48",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "21068386-092A-302D-C369-1398685DF84E",
        "AccountType": "Aplicacao",
        "Balance": "R$371,50",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "3AA79AB7-7383-EBF8-4B66-8FC9D9764D04",
        "AccountType": "Custodia",
        "Balance": "R$834,15",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "A33515FF-678F-11C7-4E4E-CC5376722FF0",
        "AccountType": "Poupanca",
        "Balance": "R$614,19",
        "AccountStatus": "Active"
    },
    {
        "Id": "28FCD7C3-180F-E3BF-3160-9555E98A12AD",
        "AccountType": "Conta Corrente",
        "Balance": "R$348,37",
        "AccountStatus": "Active"
    },
    {
        "Id": "26406741-E780-2233-6927-145B47DEA6D3",
        "AccountType": "Conta Corrente",
        "Balance": "R$718,45",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "DE2733EE-C76A-DC96-3C16-9EBC0AEA91B7",
        "AccountType": "Poupanca",
        "Balance": "R$142,20",
        "AccountStatus": "Active"
    },
    {
        "Id": "BC541F82-06C7-BB63-41DB-1ABC4E70E430",
        "AccountType": "Conta Corrente",
        "Balance": "R$69,68",
        "AccountStatus": "Active"
    },
    {
        "Id": "E7F580F0-89BD-4A52-FA79-C9CF1651550B",
        "AccountType": "Poupanca",
        "Balance": "R$311,71",
        "AccountStatus": "Active"
    },
    {
        "Id": "E462404A-98A2-B4F3-FFB7-BA8A435BD1FC",
        "AccountType": "Conta Corrente",
        "Balance": "R$159,58",
        "AccountStatus": "Active"
    },
    {
        "Id": "382783E7-1999-F189-5742-C0207AA4CCF1",
        "AccountType": "Aplicacao",
        "Balance": "R$712,19",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "53A9F5D4-0120-F37C-2983-DD2472E09F70",
        "AccountType": "Custodia",
        "Balance": "R$129,97",
        "AccountStatus": "Active"
    },
    {
        "Id": "1919F0CE-273E-5DA2-C3DC-0567159A800F",
        "AccountType": "Poupanca",
        "Balance": "R$979,59",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "DDF8A1DC-1C7D-97BF-CF5F-B89D3ED4F4B9",
        "AccountType": "Poupanca",
        "Balance": "R$495,67",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "DDD92DD4-C92E-65E4-3F65-77249A23D8BB",
        "AccountType": "Custodia",
        "Balance": "R$649,69",
        "AccountStatus": "Active"
    },
    {
        "Id": "401808A8-19C6-F993-8A91-54967ED073D3",
        "AccountType": "Poupanca",
        "Balance": "R$535,06",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "8E894B8A-0A11-E0D9-F157-CBA49E8949E3",
        "AccountType": "Poupanca",
        "Balance": "R$69,59",
        "AccountStatus": "Active"
    },
    {
        "Id": "0719E16B-DA52-71C8-B8E2-3A6050ECA8E1",
        "AccountType": "Poupanca",
        "Balance": "R$358,20",
        "AccountStatus": "Active"
    },
    {
        "Id": "0DB7D32E-5406-4B71-C71C-AFD23C306A93",
        "AccountType": "Aplicacao",
        "Balance": "R$500,51",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2B2DED50-89AA-57F9-4B60-AFE1D598797F",
        "AccountType": "Aplicacao",
        "Balance": "R$514,58",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "E98E629B-92A2-0CAA-E0C0-143CE331E425",
        "AccountType": "Custodia",
        "Balance": "R$156,80",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "43E52C8B-C308-CD97-9CA7-1653FD2D8C4F",
        "AccountType": "Custodia",
        "Balance": "R$932,01",
        "AccountStatus": "Active"
    },
    {
        "Id": "14243079-0815-2321-A250-6B50E366ED72",
        "AccountType": "Aplicacao",
        "Balance": "R$659,77",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "2B42ECE0-AB70-752D-6687-B0646A2A5C10",
        "AccountType": "Custodia",
        "Balance": "R$108,36",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "24463663-F31A-8812-B504-8F609452353E",
        "AccountType": "Custodia",
        "Balance": "R$627,64",
        "AccountStatus": "Active"
    },
    {
        "Id": "CBB38FDA-0D08-B49B-0D40-995C6B3FC716",
        "AccountType": "Custodia",
        "Balance": "R$640,79",
        "AccountStatus": "Active"
    },
    {
        "Id": "49E5D4F6-AFC0-3186-9E7E-8A3C08CA1F65",
        "AccountType": "Conta Corrente",
        "Balance": "R$616,95",
        "AccountStatus": "Active"
    },
    {
        "Id": "A4765E22-279E-80AF-5C33-8CC1C11F7350",
        "AccountType": "Conta Corrente",
        "Balance": "R$430,12",
        "AccountStatus": "Active"
    },
    {
        "Id": "47C052BD-B9BB-A62C-29B6-BFC7C73E5352",
        "AccountType": "Poupanca",
        "Balance": "R$991,63",
        "AccountStatus": "Inactive"
    },
    {
        "Id": "4B3C6971-143C-BE95-AB79-E38B8FB6864E",
        "AccountType": "Poupanca",
        "Balance": "R$160,22",
        "AccountStatus": "Active"
    },
    {
        "Id": "5CC12A6D-FE03-E67D-2182-E59CF6E6E2D8",
        "AccountType": "Poupanca",
        "Balance": "R$586,15",
        "AccountStatus": "Active"
    },
    {
        "Id": "4F12103E-85CC-8448-C968-622E9C72EDF1",
        "AccountType": "Aplicacao",
        "Balance": "R$199,82",
        "AccountStatus": "Active"
    }
];

app.get('/accounts', (require, response) => {
    return response.json(accounts);
})

app.listen(3000);